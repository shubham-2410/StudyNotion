const mongoose = require("mongoose");

require('dotenv').config();

const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connection Successfull");
    })
    .catch((error)=>{
        console.log(error);
        console.log("Error while Connection to DB");
        process.exit(1);
    })
}

module.exports={connectDb};