const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const RatingAndReviews = require("../models/RatingAndReviews");
const User = require("../models/User");

const createRating = async (req, res) => {
    try {
        const userId = req.user.id;

        const { courseId, rating, review } = req.body;

        const isEnrolled = await Course.findOne(
            {
                _id: courseId,
                studentEnrolled: { $elemMatch: { $eq: userId } }
            });

        if (!isEnrolled) {
            return res.status(404).json({
                success: false,
                message: "No course found with particular courseId"
            });
        }

        const alreadyReview = await RatingAndReviews.findOne({
            user: userId,
            course: courseId,
        });

        if (alreadyReview) {
            return res.status(400).json({
                success: false,
                message: "Already Reviewed",
            })
        }

        const newRatingAndReview = await RatingAndReviews.create({
            user: userId,
            course: courseId,
            review: review,
            rating: rating,
        });

        return res.status(200).json({
            success: true,
            message: "Your rating and review submited ",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}

const getAvgRating = async (req , res)=>{
    try {
        const {courseId} = req.body;

        const result = await RatingAndReviews.aggregate([
            {
                $match:{
                    course: new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating: {$avg : "$rating"},
                }
            }
        ]);

        if(result.length >0){
            return res.status(200).json({
                success:true,
                averageRating:result[0],
                message:"Avg rating calculated successfully"
            });
        }
        else {
            return res.status(200).json({
                success:true,
                averageRating:0,
                message:"No Rating Present",
            })
        }
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"Unable to get avg rating"
        });
    }
}

const getAllRating = async (req , res)=>{
    
    try {
        const allRatings = await RatingAndReviews.find({})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path:"User",
                                        select:"firstName lastName email image",
                                    })
                                    .populate({
                                        path:"Course",
                                        select: "Name"
                                    })
                                    .exec();

        return res.status(200).json({
            success:true,
            message:"ALL ratings and reviews fetch successfully "
        })
    }
    catch (error) {
       console.log(error);
       return res.status(500).json({
        success:false,
        message:error.message,
       });
    }
    
}


module.exports={
    createRating,
    getAllRating,
    getAvgRating,
}