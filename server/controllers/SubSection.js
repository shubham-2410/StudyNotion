
const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const { uploadImageToClodinary } = require("../utils/imageUploader");

const createSubSection= async (req , res)=>{
    try {
        const {title , description , timeDuration , sectionId}= req.body;

        const video = req.files.vedio;

        if(!title || !description ||!timeDuration || !video ||!sectionId){
            return res.status(409).json({
                success:false,
                message: "Data missing",
            });
        };

        const uploadVideo = await uploadImageToClodinary( video , process.env.FOLDER_NAME);

        const newSubSection = await SubSection.create({
            description:description,
            title:title,
            timeDuration:timeDuration,
            videoUrl:uploadVideo.secure_url,
        });

        const updatedSection =  await Section.findByIdAndUpdate(
            {_id:sectionId},
            {
                $push:{
                    subSection:newSubSection._id,
                }
            },
            {new : true}
        )
        .populate({
            path:"subSection",
        })

        res.status(200).json({
            success:true,
            message:"New Sub Section Created Successfully",
            updatedSection,
        });
    } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:"Failure to create Sub Section",
            error,
        })
    }
}

const updateSubSection= async (req , res)=>{
    try {
        const {title , description , timeDuration , subSectionId}= req.body;

        const video = req.files.vedioFile;

        const subSection = await SubSection.findById({_id:subSectionId});

        if(!title){
            title=subSection.title
        };

        if(!description){
            description=subSection.description;
        };

        if(!timeDuration){
            timeDuration=subSection.timeDuration;
        };

        let vedioUrl;
        if(!video){
            vedioUrl=subSection.vedioUrl;
        }
        else{
            const uploadVideo = await uploadImageToClodinary( video , process.env.FOLDER_NAME);
            vedioUrl= uploadVideo.secure_url;
        }

        const updated = await SubSection.findByIdAndUpdate(
            {_id:subSectionId},
            {
                title:title,
                description:description,
                timeDuration:timeDuration,
                videoUrl:videoUrl,
            },
            {new:true}
        )

        res.status(200).json({
            success:true,
            message:"SubSection Updated Successfully",
            updated,
        });
    } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:"Failure to Update Sub Section",
            error,
        })
    }
}


const deleteSubSection= async (req , res)=>{
    try {
        const {sectionId , subSectionId} = req.body;

        if(!sectionId || !subSectionId){
            return res. status(409).json({
                success:false,
                message:"Data Missing",
            });
        }

        const toDelete = await SubSection.findByIdAndDelete({_id:subSectionId});

        const removeFromSection = await Section.findByIdAndUpdate(
            {_id:sectionId},
            {
                $pull:{
                    subSection:toDelete._id,
                }
            },
            {new:true}
        )

        res.status(200).json({
            success:true,
            message:"SubSection deleted successfully and neccessary changes done in Section",
        });
    } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:"Failure to delete SubSection",
            error,
        })
    }
}


module.exports={
    createSubSection,
    updateSubSection,
    deleteSubSection,
}