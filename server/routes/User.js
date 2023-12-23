const express = require("express");

const userRoutes = express.Router();

const {login , signUp , sentOTP , changePassword} = require('../controllers/Auth');

const {auth,}=require('../middlewares/auth');

const {resetPasswordToken,resetPassword} = require("../controllers/ResetPassword");

// router for auth
userRoutes.post("/login" , login);
userRoutes.post("/signup" , signUp);
userRoutes.post("/sentotp" , sentOTP);
userRoutes.put("/changepassword" , auth ,changePassword);

// reset password
userRoutes.post('/reset-password-token' , resetPasswordToken );
userRoutes.post('/reset-password' , resetPassword)

module.exports= userRoutes;