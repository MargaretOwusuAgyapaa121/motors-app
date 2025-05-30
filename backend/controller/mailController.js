
const nodemailer = require("nodemailer");
require("dotenv").config();

const home = (req, res)=>{
    res.send("hello")
}

const sendMessage = async (req, res)=>{
    const {name, email,  subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.MAILHOST,
        port: process.env.MAILPORT,
        secure: true,
    
           auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWORD
        }
    })

    const mailOption = {
        from: `${name} <${process.env.MAILUSER}`,
        replyTo: email,
        to: "apoku2593@gmail.com",
        subject: `A new message from ${name}\n${subject}`,
        text: `\nMessage${message}`,
        html:` 
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`                  
    }

    transporter.sendMail(mailOption, (error, info)=>{
        console.error(error);                
        if (error){
           return res.status(500).json({success: false, message: "Error sending email"})           
        }        
        return res.status(200).json({success: true, message: "Email sent successfully"})                
    })
}

module.exports = {
    sendMessage,
    home
}