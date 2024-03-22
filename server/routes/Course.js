const express = require("express");
const { auth, isStudent, isAdmin, isInstructor } = require("../middlewares/auth");
const { createRating, getAvgRating, getAllRating } = require("../controllers/RatingAndReview");
const { createCategory, showAllCategory, categoryPageDetails } = require("../controllers/Category");
const { createCourse, showAllCourse, getCourseDetails , allCoursesByInstructor} = require("../controllers/Course");
const { createSection, updateSection, deleteSection } = require("../controllers/Section");
const { updateSubSection, deleteSubSection, createSubSection } = require("../controllers/SubSection");
const courseRoutes = express.Router();

courseRoutes.post("/createCourse" , auth , isInstructor , createCourse);
courseRoutes.get("/getAllCourses" , showAllCourse);
courseRoutes.post("/getCourseDeatials" , getCourseDetails);
courseRoutes.get("/getCourseDetailsByInstructor" ,auth , isInstructor , allCoursesByInstructor);

courseRoutes.post("/addSection" , auth , isInstructor , createSection);
courseRoutes.post("/updateSection", auth , isInstructor , updateSection);
courseRoutes.post("/deleteSection" , auth , isInstructor , deleteSection);

courseRoutes.post("/updateSubSection", auth , isInstructor , updateSubSection);
courseRoutes.post("/deleteSubSection" , auth , isInstructor , deleteSubSection);
courseRoutes.post("/addSubSection" , auth , isInstructor , createSubSection);

courseRoutes.post("/createCategory" , auth , isAdmin , createCategory);
courseRoutes.get("/showAllCategories" , showAllCategory);
courseRoutes.post("/getCategoryPageDetails" , categoryPageDetails);

courseRoutes.post("/createRating" , auth , isStudent , createRating);
courseRoutes.get("/getAverageRating" , getAvgRating);
courseRoutes.get("/getReviews" , getAllRating);

module.exports = courseRoutes;