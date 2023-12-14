const Category = require("../models/Category");


const createCategory=async (req , res )=>{

    try {
        const {name, description} = req.body;

        if(!name || !description){
            return res.status(409).json({
                success:false,
                message : "Please fill all fields",
            })
        }
        
        const categoryDetails =await Category.create({
            name:name,
            description:description,
        })

        console.log(categoryDetails);

        return res.status(200).json({
            success:true,
            message:"category created successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success:true,
            message:"Failure in creating category , Please try again",
            error,
        })
    }
}

const showAllCategory= async (req, res)=>{
    console.log("Bhai show all category mai aa gaya hai tu")
    try {
        const allCategory = await Category.find({} , {name:true , description:true});

        return res.status(200).json({
            success:true,
            message:"All tags return successfully",
            allCategory,
        });

    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failure to fetch all tags",
            error:error,
        })
    }
}

const categoryPageDetails = async (req , res)=>{
    try {
        const {categoryId} = req.body;

        const selectCategory = await Category.findById({_id:categoryId})
                                    .populate("courses")
                                    .exec()

        if(!selectCategory){
            return res.status(404).json({
                success:false,
                message:"No details found regading this category",
            });
        }

        const differentCategory = await Category.find({
            _id: {$ne :categoryId},
            })
            .populate("courses")
            .exec();
        
        // Also can find Top Buy courses
        
        return res.status(200).json({
            success:true,
            data:{
                selectCategory,
                differentCategory,
            },
            message:"Data fetched successfully"
        })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"unable to fetch categoryPageDetails "
        })
    }
}

module.exports={
    createCategory,
    showAllCategory,
    categoryPageDetails,
}