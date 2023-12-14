
const mongoose = require("mongoose");

const ratingAndReviesSchema =new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model(" RatingAndReviews ", ratingAndReviesSchema);