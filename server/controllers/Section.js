const Section = require("../models/Section");
const Course = require("../models/Course");


const createSection = async (req, res) => {
    try {
        const { sectionName, courseId } = req.body;
        
        if (!sectionName || !courseId) {
            return res.status(409).json({
                success: false,
                message: "Please fill all details"
            })
        };

        const course = await Course.findById({_id:courseId});

        if (!course) {
            return res.status(400).json({
                success: false,
                message: "No Course found",
            })
        };

        const newSection = await Section.create({
            sectionName: sectionName,
        });

        const updateCourse = await Course.findByIdAndUpdate(
            { _id: courseId },
            {
                $push: {
                    courseContent: newSection._id
                }
            },
            { new: true }
        ).populate({
            path:"courseContent"
        })
        .exec();

        res.status(200).json({
            success: true,
            message: "Section Created Successfully",
            updateCourse,
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Falure during Creating section",
            error,
        });
    };
}

const updateSection = async (req, res) => {
    try {
        const { sectionId, sectionName } = req.body;

        if (!sectionId || !sectionName) {
            return res.status(409).json({
                success: false,
                message: "Please fill all deatils"
            })
        };

        const newSection = await Section.findByIdAndUpdate(
            { _id: sectionId },
            { sectionName: sectionName },
        );

        res.status(200).json({
            success: true,
            messagea: "Section Updated Successfully",
            newSection,
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to update section , plase try again",
            error,
        });
    }
}

const deleteSection = async (req, res) => {
    try {
        const { sectionId } = req.body;

        if (!sectionId) {
            return res.status(409).json({
                success: false,
                message: "Missing data",
            });
        }

        const section = await Section.findById({ _id: sectionId });
        if (!section) {
            return res.status(404).json({
                success: false,
                message: "Section not found",
            });
        }

        // const course = await Course.findById({_id:courseId});
        // if(!course){
        //     return res.status(404).json({
        //         success:false,
        //         message:"Course not found",
        //     });
        // }

        const sectionToDelete = await Section.findByIdAndDelete({ _id: sectionId });

        // Todo during testing , is it neccessary to delete entry , obj Id from course

        res.status(200).json({
            success: true,
            message: "Section deleted successfully"
        })
    }
    catch (error) {

    }
}


module.exports = {
    createSection,
    deleteSection,
    updateSection,
}