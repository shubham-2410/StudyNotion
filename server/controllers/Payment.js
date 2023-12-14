const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const { instance } = require("../config/razorpay");


const capturePayment=async (req , res)=>{
    const {course_id} = req.body;

    const userId = req.user.id;

    if(!course_id){
        return res.status(400).json({
            success:false,
            message :"Course_Id not found",
        })
    }

    let course ;
    try {
        course = await Course.findById(course_id);
        if(!course){
            return res.status(400).json({
                success:false,
                message: "Course not found",
            });
        }    

        // is student already enrolled

        const uid = new mongoose.Types.ObjectId(userId);
        if(Course.studentEnrolled.includes(uid)){
            return res.status(400).json({
                success:false,
                message:"Student is already enrolled"
            })
        }

    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }

    const amount = Course.prependOnceListener;
    const Currency = "INR";
    const options = {
        amount : amount * 100,
        Currency,
        receipt : Math.random(Date.now()).toString(),
        notes:{
            courseId: course_id,
            userId,
        }
    };

    try {
        const paymentResponse = await instance.order.create(options);
        console.log(paymentResponse);
        
        return res.status(200).json({
            success:true,
            courseName:Course.name,
            courseDescription : Course.description,
            thumbnail:Course.image,
            orderId : paymentResponse.id,
            currency : paymentResponse.currency,
            amount: paymentResponse.amount,
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Could not initiate order",
        })
    }
}


const verifySignature = async (req , res)=>{
    const webhookSecret ="12345678";

    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256" , webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if(signature === digest){
        console.log("Payment is Authorized");

        const {courseId , userId} = req.body.payload.payment.entity.notes;

        try{
            const enrolledCourse = await Course.findByIdAndUpdate(
                {_id:courseId},
                {
                    $push:{
                        studentEnrolled:userId
                    }
                },
                {new:true}
            );

            if(!enrolledCourse){
                return res.status(500).json({
                    success:false,
                    message:"Course not found",
                })
            }

            let enrolledStudent = await User.findOneAndUpdate(
                {_id:userId},
                {$push:{couses:courseId}},
                {new:true},
            );
            const emailResponse = await mailSender(
                enrolledStudent.email,
                "Congratulation from codehelp",
                "Congratulation , you are onboarded into new codehelp course"
            )
            console.log(enrolledCourse);
        }
        catch(error){
            return res.status(400).json({
                success:false,
                message:"Error while signature verifiction",
            })
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:"Sinature and digest dosent match"
        })
    }
}

module.exports = {capturePayment ,verifySignature };