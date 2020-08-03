require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve("client", "public")));
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("welcome to my form")
// })

app.post("/api/form", (req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:"Gmail",
        port: 465,
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD
        }
    })

let mailOptions = {
    from:data.email,
    to:"kr684173@gmail.com",
    subject:`Message from ${data.name}`,
    html:`
        <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Mobile: ${data.mobile}</li>
                <li>Address: ${data.address}</li>
            </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
    `
};

smtpTransport.sendMail(mailOptions, (error, response)=>{
    if(error){
        res.send(error)
    } else {
        res.send("Success")
    }
})

smtpTransport.close();

})

app.get("*", (req,res) => {
    res.sendFile(path.resolve("client", "public", "index.html"))
})

const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})