
const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const { uploadImageToClodinary } = require("../utils/imageUploader");

const createCourse = async (req , res)=>{
    try {
        const {name , description , whatwillyoulearn , price , category , tag} = req.body;

        const thumbnail = req.files.thumbnail;

        if(!name || !description ||!whatwillyoulearn ||!price ||!category || !tag){
            return res.status(409).json({
                success:false,
                message:"fill all details",
            })
        }

        const userId = req.user.id;
        const instructorDetails = await User.findById({_id:userId});
// to verify userid = instructor id
        console.log(instructorDetails)

        if(!instructorDetails){
            res.status(404).json({
                success:false,
                message:"Instructor not found",
            })
        }

        const categoryDetails = await Category.findOne({name:category});
        if(!categoryDetails){
            return res.status(404).json({
                success:false,
                message:"Category not found",
            })
        }

        const uploadThumbnail = await uploadImageToClodinary(thumbnail , process.env.FOLDER_NAME);

        const newCourse = await Course.create({
            name :name,
            description : description,
            instructor:instructorDetails._id,
            whatwillyoulearn:whatwillyoulearn,
            price:price,
            category: categoryDetails._id,
            image:uploadThumbnail.secure_url,
            tag:tag,
        })

        const updateInstructor = await User.findOneAndUpdate(
            {_id:instructorDetails._id},
            {
                $push:{
                    courses: newCourse._id,
                }
            }
        );

        const updateCategory = await Category.findOneAndUpdate(
            {name:category},
            {
                $push:{
                    course: newCourse._id,
                }
            },
            {new:true}
        );


        return res.status(200).json({
            success:true,
            message:"Course updated successfully",
            data:newCourse,
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failure while creating course",
            error
        })
    }
}


const showAllCourse= async (req, res)=>{
    try {
        const allCourses = await Course.find({},{
            name:true,
            price:true,
            description:true,
            image:true,
            category:true,
            instructor:true
        }).populate("instructor")
        .exec();

        return res.status(200).json({
            success:true,
            message:"All courses fetched successfully",
            allCourses
        });
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failure to fetch all courses details",
            error
        })
    }
}

const getCourseDetails = async (req , res)=>{
    try {
        console.log(" i am in")
        const {courseId} = req.body;
        console.log(1)
        const courseDetails = await Course.findById({_id:courseId})
                                            .populate(
                                                {
                                                    path:"instructor",
                                                    populate:{
                                                        path:"profile",
                                                    },
                                                }
                                            )
                                            .populate("category")
                                            // .populate("ratingAndReviews")
                                            .populate({
                                                path:"courseContent",
                                                populate:{
                                                    path:"subSection",
                                                },
                                            })
                                            .exec();
                                        console.log(2)
                
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Could find course with particular id",
            });
        }

        return res.status(200).json({
            success:true,
            message:"Course details fetched successfully",
            courseDetails:courseDetails,
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

module.exports={
    createCourse,
    showAllCourse,
    getCourseDetails,
}
