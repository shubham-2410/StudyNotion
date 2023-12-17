const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");

const {connectDb} = require("./config/database");
const {connectCloudinary} = require("./config/cloudinary");

const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors")
const fileUpload = require("express-fileupload")

require("dotenv").config();

const PORT = process.env.PORT || 4000;


app.use(fileUpload({
     useTempFiles:true,
     tempFileDir:"/tmp",
}));
// app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
     cors({
		origin:"https://studynotion-frontend-chi.vercel.app",
		credentials:true,
	}) 
);

connectDb();
connectCloudinary();

app.use("/api/v1/auth" , userRoutes);
app.use("/api/v1/profile" , profileRoutes);
app.use("/api/v1/course" , courseRoutes);
app.use("/api/v1/payment" , paymentRoutes);

app.get("/", (req , res)=>{
    return res.json({
        success:true,
        message:"Your Server is up and running....."
    });
})

app.listen(PORT , ()=>{
    console.log(`App is runing at http://localhost:${PORT}`)
});
