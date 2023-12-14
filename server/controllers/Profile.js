// const mongoose = require('mongoose');
const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToClodinary } = require("../utils/imageUploader");
const CourseProgress = require("../models/CourseProgress");

const updateProfile = async (req, res) => {
    try {
        const { gender, dateOfBirth = "", about = "", contactNumber } = req.body;

        if (!gender || !contactNumber) {
            return res.status(409).json({
                success: false,
                message: "Please fill required details",
            })
        }
        const userId = req.user.id;

        // problem while type casting
        // console.log("userIdString:", userIdString , typeof(userIdString));
        // const userId = mongoose.Types.ObjectId(userIdString);

        const user = await User.findById({ _id: userId });
        console.log("i am user ", user);
        if (!user) {
            return res.status(201).json({
                success: false,
                message: "No user found",
            })
        }

        const updateAdditionalDetails = await Profile.findOneAndUpdate(
            { _id: user.profile },
            {
                gender: gender,
                dateOfBirth: dateOfBirth,
                about: about,
                contactNumber: contactNumber,
            },
            { new: true },
        );

        // Other way 

        // const updateAdditionalDetails = await Profile.findById({_id:user.profile});
        // updateAdditionalDetails.dateOfBirth = dateOfBirth;
        // updateAdditionalDetails.gender=gender;
        // updateAdditionalDetails.about=about;
        // updateAdditionalDetails.contactNumber=contactNumber;
        // await updateAdditionalDetails.save();

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            updateAdditionalDetails,
        })

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to update profile details",
            error,
        })
    }
}

const deleteAccount = async (req, res) => {
    try {
        console.log("i am in")
        const userId = req.user.id;
        console.log("UserId:", userId); 
        console.log("after")
        if (!userId) {
            return res.status(404).json({
                success: false,
                message: "userId not present for user",
            });
        }

        console.log(userId)
        const user = await User.findById({_id : userId});
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User do not exit"
            });
        }

        const profileId = user.profile;

        await Profile.findByIdAndDelete({ _id: profileId });

        await User.findByIdAndDelete({ _id: user._id });

        return res.status(200).json({
            success: true,
            message: "User Account deleted successfully along with profile",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to delete user account",
            error,
        });
    }
}

const updateDisplayPicture = async (req, res) => {
    try {
        const picture = req.files.photo;

        if (!picture) {
            return res.status(409).json({
                success: false,
                message: "Picture not found ",
            });
        }

        // can perform different validation like png , jpg , etc
        // console.log("i am in")
        const userId = req.user.id;

        if (!userId) {
            return res.status(404).json({
                success: false,
                message: "User id not found"
            })
        }

        const user = await User.findById({ _id: userId });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User  not found"
            });
        }

        const img = await uploadImageToClodinary(picture, process.env.FOLDER);

        user.image = img.secure_url;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile picture updated successfully",
            user,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failure to update profile photo",
            error: error,
        })
    }
}
const getAlluserDetails = async (req, res) => {
    try {
        const userId = req.user.id;

        // can do validation

        const user = await User.findById({ _id: userId })
            .populate({
                path: 'profile', 
                // populate: {
                //     path: 'Profile', 
                // },
            })
            .populate(
                {
                    path: "courses",
                    // populate: {
                    //     path: "Course"
                    // }
                }
            )
            .populate(
                {
                    path: "courseProgress",
                    // populate: {
                    //     path: "CourseProgress",
                    // }
                }
            )
            .exec();
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Could find course with particular id",
            });
        }

        return res.status(200).json({
            success: true,
            message: "user details fetched",
            user: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const getEnrolledCourses = async (req, res) => {

}

module.exports = {
    updateProfile,
    deleteAccount,
    updateDisplayPicture,
    getEnrolledCourses,
    getAlluserDetails
}