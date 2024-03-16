
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = async (req, res, next) => {
    try {
        console.log("Inside auth middleware");
        const token = req.body.token || req.cookies.token || (req.headers.authorization ? req.headers.authorization.replace("Bearer ", "") : null);

        console.log( "Cookie" ,req.cookies.token)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Absent",
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log("decode user" , decoded);
            next();
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while validating token",
        });
    }
};


const isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Studnet") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for student"
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified , please try again"
        })
    }
}

const isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for Instructor"
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified , please try again"
        })
    }
}

const isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for Admin"
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified , please try again"
        })
    }
}

module.exports={
    isAdmin,
    isInstructor,
    isStudent,
    auth, 
}