
const feedBack=async(req , res)=>{
    try {
        const {firstName , lastName , phoneNo , countryCode , message} = req.body;

        if(!firstName || !lastName || !phoneNo ||!countryCode || !message){
            return res.status(400).json({
                success:false,
                message:"Please fill all feilds"
            })
        }

    } 
    catch (error) {
        return res.status(400).json({
            success:false,
            message:"Error in feedback form",
            error,
        })
    }
}