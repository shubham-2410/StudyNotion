const express = require("express");
const paymentRoutes = express.Router();

const {capturePayment ,verifySignature } = require("../controllers/Payment");
const {isAdmin,isInstructor,isStudent,auth,}=require('../middlewares/auth');

paymentRoutes.post ("/capturePayment" , auth , isStudent , capturePayment);
paymentRoutes.post("/verifySignature" , verifySignature);

module.exports = paymentRoutes;