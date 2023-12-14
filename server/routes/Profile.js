const express = require("express");
const profileRoutes = express.Router();
const {auth} = require('../middlewares/auth');

const {
    updateProfile,
    deleteAccount,
    updateDisplayPicture,
    getEnrolledCourses,
    getAlluserDetails
} = require("../controllers/Profile");

profileRoutes.delete("/deleteProfile" ,auth ,  deleteAccount);
profileRoutes.put("/updateProfile" , auth , updateProfile);
profileRoutes.get("/getUserDetails", auth , getAlluserDetails);
// get enrolled courses

profileRoutes.get("/getEnrolledCourses" , auth , getEnrolledCourses);
profileRoutes.put("/updateDisplayPicture" , auth , updateDisplayPicture);

module.exports = profileRoutes;