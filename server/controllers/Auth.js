
const User = require("../models/User");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
require("dotenv").config();


const sentOTP = async (req, res) => {
    console.log("inside sentotp");
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(403).json({
                success: false,
                message: "please enter email",
            })
        }
        console.log(email);
        const alreadyRegister = await User.findOne({ email });
        if (alreadyRegister) {
            return res.status(409).json({
                success: false,
                message: "User already registered",
            })
        };

        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        console.log("otp ",otp);

        console.log("Otp generated : ", otp);

        const result = await OTP.findOne({ otp: otp })

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });

            result = await otp.findOne({ otp: otp });
        }

        const otpBody =await OTP.create({
            otp,
            email,
        })

        res.status(200).json({
            success: true,
            message: "OTP send successfully",
            otpBody
        })

    }
    catch (error) {
        console.log("Error while sending otp: ", error);
        res.status(500).json({
            success: false,
            message: "Error while sending otp",
            error,
        });
    }
    
}


const signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            otp,
        } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType) {
            return res.status(422).json({
                success: false,
                message: "Please Fill details",
            })
        }

        console.log("oyee " , password , confirmPassword)
        if (password != confirmPassword) {
            return res.status(403).json({
                success: false,
                message: "Password and confirmPassword are not same",
            })
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exist",
            })
        }

        console.log("inside signup : " , email)
        const recentOtp = await OTP.findOne({ email })
        console.log(recentOtp , otp)
        if(!recentOtp){
            return res.status(400).json({
                success:false,
                message:"OTP expired , try again",
            })
        }

        if (otp.toString() !== recentOtp.otp.toString()) {
            return res.status(400).json({
                success: false,
                message: "Otp doesn't match",
            })
        }

        const hashPassword =await bcrypt.hash(password, 10);

        const additionalDetails = await Profile.create({
            gender: null,
            about: null,
            dateOfBirth: null,
            contactNumber: null,
        });

        const user = await User.create({
            firstName, lastName, email, accountType,
            password: hashPassword,
            profile: additionalDetails._id,
            image: `https://api.dicebear.com/7.x/initials/svg?seed=${firstName}  ${lastName}`
        })


        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user,

        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error,
            message: "Problem while signUP",
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(1)
        if (!email || !password) {
            return res.status(404).json({
                success: false,
                message: "Please enter all details"
            })
        }
        console.log(email , password);


        const existingUser = await User.findOne({ email: email })
                            .populate("profile");
        console.log("existinguser"  , existingUser);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "Please signup first",
            })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        console.log(isMatch);
        if (isMatch) {
            console.log("inside if")
            const payload = {
                email: email,
                id: existingUser._id,
                accountType: existingUser.accountType,
            }
            console.log("password match")
            const token =jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h'});

            console.log("Generated token : ", token);

            existingUser.token = token;
            existingUser.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Expires in 3 days
                httpOnly: true,
                samesite:'None',
                // secure : true,
            };
            console.log("before")
            // console.log("Exi..." , existingUser)

            // res.;
            
            res.cookie("token" , token , options ).status(200).json({
                success: true,
                message: "Login Successfull",
                user:existingUser,
            })
            console.log("after")
        }
        else {
            console.log("success");
            return res.status(404).json({
                success: false,
                message: "Incorrect Password"
            })
        }

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Login Failure , please try again",
            error,
        })
    }
}

const changePassword =async (req , res)=>{
    try {
        const {email , newPassword , oldPassword} = req.body;
        console.log("password change : " , email , newPassword , oldPassword);
        if(!newPassword || !oldPassword || !email){
            res.status(409).json({
                success:false,
                message:"Please fill all details"
            })
        }

        const user = await User.findOne({email:email});

        if(await bcrypt.compare(oldPassword , user.password)){
            console.log("Pass match")

            const hashPassword=await bcrypt.hash(newPassword , 10);
            await User.findOneAndUpdate(
                {email:email},
                {password:hashPassword},
            )

            mailSender(email , "Password Changing" , `Password Changed Successfully at ${Date.now()} `)
            console.log("Mail send successfully")
            return res.status(200).json({
                success:true,
                message:"Password Changed Successfully"
            })
        }
        else{
            return res.status(404).json({
                success:false,
                message:"Old Password is Incorrect"
            })
        }
    } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:"Unexpected error during password change",
            error:error
        })
    }
}

module.exports={
    sentOTP,
    signUp,
    login,
    changePassword,
}