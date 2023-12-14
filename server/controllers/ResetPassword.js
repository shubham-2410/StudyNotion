const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


const resetPasswordToken = async (req , res)=>{
    try {
        const {email} = req.body;
        const user =await User.findOne({email:email});
        
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Account does not exit , please SignUp  first",
            })
        }
        console.log("i am in" , user)

        const token = crypto.randomUUID();
        console.log("crypto token" , token);
        const url=`http://localhost:3000/update-password/${token}`;

        const updateUser = await User.findOneAndUpdate(
            {email:email},
            {
                token:token,
                resetPasswordExpires : Date.now()+5*60*1000,
            }
        )

        await mailSender(email , `password reset link ${url }`, "Password reset link");

        return res.status(200).json({
            success:true,
            message:"Reset link send successfully",
            url,
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"Token problem for reset Password"
        })    
    }
}


const resetPassword = async (req , res)=>{
    try {
        const {password , confirmPassword , token} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and ConfirmPassword not match",
            })
        }

        const userDetails = await User.findOne({token:token});

        // if (!userDetails) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid or expired reset token",
        //     });
        // }

        if(userDetails.resetPasswordExpires < Date.now()){
            return res.status(400).json({
                success:false,
                message:"Link expires , Try Again",
            })
        }

        const hashPassword =await bcrypt.hash(password,10);

        await User.findOneAndUpdate(
            {token:token},
            {password:hashPassword},
        )

        res.status(200).json({
            success:true,
            message:"Password reset successfull"
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

// const resetPassword = async (req, res) => {
//     try {
//         const { password, confirmPassword, token } = req.body;

//         if (password !== confirmPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Password and ConfirmPassword do not match",
//             });
//         }

//         const userDetails = await User.findOne({ token: token });

//         const margin = 5 * 60 * 1000; // 5 minutes

//         if (!userDetails) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid or expired reset token",
//             });
//         }

//         if (userDetails.resetPasswordExpires < Date.now() - margin) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Reset link has expired, please request a new one",
//             });
//         }

//         // Hash the password using bcrypt
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Update the user's password in the database with the hashed password
//         await User.findOneAndUpdate(
//             { token: token },
//             { password: hashedPassword }
//         );

//         res.status(200).json({
//             success: true,
//             message: "Password successfully reset",
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             success: false,
//             message: "An error occurred while resetting the password",
//         });
//     }
// };


module.exports={
    resetPasswordToken,
    resetPassword,
}