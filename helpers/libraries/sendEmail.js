const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS} = process.env;

const sendEmail = async(mailOptions) => {
    
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    let info = await transporter.sendMail(mailOptions);
    console.log(`Message Sent: ${info.messageId}`);
}

module.exports = sendEmail;