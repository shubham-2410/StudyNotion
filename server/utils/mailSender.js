
const nodeMailer = require("nodemailer");

const mailSender = async (email , body , title)=>{

    console.log("inside mailsender");
    try {
        const transport = nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })
        let info = await transport.sendMail({
            from:"Study Notion",
            to:email,
            subject:title,
            html:`${body}`,
        })

        console.log(info);
        return info;
    } 
    catch (error) {
        console.log("In mail Sender error is :" , error)
    }
}

module.exports = mailSender;