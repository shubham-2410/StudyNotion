

const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:600,
    }
})

const sendVeificationEmail= async (email , otp)=>{

    try {
        const mailResponse =await mailSender(email ,  otp , "Vefifiaction form study notion"  )
        console.log("Email send successfully" , mailResponse)
    } 
    catch (error) {
        console.log("Error while sending verification mail : " , error) ;
        throw error;
    }
}

otpSchema.pre("save" , async function(next){
    await sendVeificationEmail(this.email , this.otp);
    next();
})

module.exports = mongoose.model("OTP", otpSchema);