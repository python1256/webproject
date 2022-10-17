const influncer_detail = require("../model/Influencers_model");
const Brand_detail = require("../model/brands_model");
const express = require("express");
require("dotenv").config();
const user_detail=require("../model/user_model");
const admin_detail=require("../model/admin_model");
const fast2sms = require('fast-two-sms');
const bodyparser=require("body-parser");
const nodemailer=require("nodemailer");
const { error } = require("console");
const app=express();
const router = express.Router();
//const smtpconnection= require("nodemailer/lib/smtp-connection");
router.get("/get-auth-code", (req, res, next) => {
    return res.send(
      `<a href='https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=user_media,user_profile&response_type=code'> Connect to Instagram </a>`
    );
  });

//user login and register

router.post("/users_Register",(req,res)=>{
    console.log(req.body);

    const password = req.body.password;
    const repassword = req.body.repassword;
    if(password == repassword){
        const user = new user_detail({
            user_name:req.body.user_name,
            email:req.body.email,
            password:req.body.password,
            repassword:req.body.repassword,
            phone:req.body.phone
        });
        console.log(user);
        user.save().then(()=>{
            res.status(201).send(user);
            //just need to change send to render and mention the home page
        }).catch((err)=>{
        res.status(400).send(err);
        })
    }else{
        res.send("password is not matching");
    }
   
});

router.post("/user_login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user_email=await user_detail.findOne({email:email});
        if(user_email.password==password){
            res.status(201).send("account found");
            //just need to change send to render and then the page in doble quates for routes
        }else{
            res.send("invalid login credentials");
        }

    }catch(err){
        res.status(400).send("invalid data entry");
    }
})

//admin login and registration
router.post("/admin_Register",(req,res)=>{
    console.log(req.body);

    const password = req.body.password;
    const cpassword = req.body.repassword;
    if(password == cpassword){
        const user = new admin_detail({
            admin_name:req.body.admin_name,
            email:req.body.email,
            password:req.body.password,
            repassword:req.body.repassword,
            address:req.body.address,
            phone:req.body.phone
        });
        console.log(user);
        user.save().then(()=>{
            res.status(201).send(user);
            //just need to change send to render and mention the home page
        }).catch((err)=>{
        res.status(400).send(err);
        })
    }else{
        res.send("password is not matching");
    }
   
})

router.post("/Admin_login",async(req,res)=>{
    try{
        const email=req.body.email;
        const cpassword=req.body.password;
        console.log(cpassword);
        const adminemail=await admin_detail.findOne({email:email});
        console.log(adminemail);
        if(adminemail.password==cpassword){
            res.status(201).send("account found");
            //just need to change send to render and then the page in doble quates for routes
        }else{
            res.send("invalid login credentials");
        }

    }catch(err){
        res.status(400).send("invalid data entry");
    }
})


//Influencer login registration and otp verification
router.post("/Influencer_Register",(req,res)=>{
    console.log(req.body);

    const password = req.body.password;
    const cpassword = req.body.repassword;
    if(password == cpassword){
        const user = new influncer_detail({
            Influencer_name:req.body.Influencer_name,
            email:req.body.email,
            password:req.body.password,
            repassword:req.body.repassword,
            phone:req.body.phone,
            Instagram_username:req.body.Instagram_username
        });
        user.save().then(()=>{
            res.status(201).send(user);
            //just need to change send to render and mention the home page
        }).catch((err)=>{
        res.status(400).send(err);
        })
    }else{
        res.send("password is not matching");
    }
   
})
//declaring transporter with nodemailer function to do transporter task
//let connection=new smtpconnection(this.options);
let transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'parthchaturvedi.wfa@gmail.com',
        pass:'pc02072001',
    }
});
//declaring global otp variable
var otp=`${Math.floor(1000 +Math.random()*9000)}`;

//two step authentication api

router.post("/send_Message/:phone",async(req,res)=>{
    try{
        const influencer_number =await influncer_detail.findOne({phone:req.params.phone});
        const msg=`your otp is ${otp}`;
        console.log(influencer_number);
        console.log(msg);
        const send_sms=influencer_number.phone;
        var options = {authorization : process.env.API_KEY, message : msg ,  numbers : [send_sms]}; 
        const response = await fast2sms.sendMessage(options);
        res.send(response);
        console.log(response);
    }
    catch(error){
        res.status(400).send(error);
    }
})



//two step for email 
router.post("/Influencer_otp_send/:email",async(req,res)=>{
    try{
        const user_email=await influncer_detail.findOne({email:req.params.email});
        console.log(user_email.email);
        const gmailb = user_email.email;
        console.log(gmailb);
        let mailoption={
            from:'parthchaturvedi.wfa@gmail.com',
            to:gmailb,
            subject:'otp for registration is:',
            html:`<h3>otp for account verification is</h3>${otp}`
        };
        console.log(mailoption);
        transporter.sendMail(mailoption,(error,info)=>{
            if(error){
                return console.log("again  error",error);
            }
            console.log('message sent:%s',info.messageId);
            console.log('preview url :%s',nodemailer.getTestMessageUrl(info));
            res.render('otp');
        })
    }catch(err){
        res.status(400).send((err,"otp is invalid").toString());
    }
})




router.post("/Influencer_verify_otp",(req,res)=>{

    if(req.body.otp==otp){
        res.send("You has been successfully registered");
    }
    else{
        res.render('otp',{msg : 'otp is incorrect'});
    }
})  



router.post("/Influencer_resend_otp",(req,res)=>{
    var mailOptions={
        to: email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp',{msg:"otp has been sent"});
    });

})
//two step authentication ends
router.post("/Influencer_login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user_email=await influncer_detail.findOne({email:email});
        if(user_email.password==password){
            res.status(201).send("account found");
            //just need to change send to render and then the page in doble quates for routes
        }else{
            res.send("invalid login credentials");
        }

    }catch(err){
        res.status(400).send("invalid data entry");
    }
})


router.get("/Get_influencer_data/:id",async(req,res)=>{
    try{
        const  _id=req.params.id;
        const infuencer_data= await influncer_detail.findById(_id);
        if(!infuencer_data){
            return res.status(400).send();
        }else{
            res.send(infuencer_data);
        }
    }
    catch(err){
        res.send(err);
    }
})


router.get("/Get_influencers_data",async(req,res)=>{
    try{
       const influencer_data =await influncer_detail.find();
       res.send(influencer_data);

    }catch(err)
    {
        res.send(err);
    }
})

//brands registration start...



router.post("/Brands_Register",(req,res)=>{
    console.log(req.body);
    const password=req.body.password;
    const cpassword=req.body.repassword;
    if(password==cpassword){
        const user=new Brand_detail(
            {
                Brands_name:req.body.Brands_name,
                email:req.body.email,
                password:req.body.password,
                repassword:req.body.repassword,
                address:req.body.address,
                phone:req.body.phone,
                Brands_Ig_username:req.body.Brands_Ig_username
            }
        );
        user.save().then(()=>{
            res.status(201).send(user);
            //just need to change send to render and mention the home page
        }).catch((err)=>{
        res.status(400).send(err);
        })
    }else{
        res.send("password is not matching");
    }
   
})

router.post("/Brands_login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user_email=await Brand_detail.findOne({email:email});
        if(user_email.password==password){
            res.status(201).send("account found");
            //just need to change send to render and then the page in double quates for routes
        }else{
            res.send("invalid login credentials");
        }

    }catch(err){
        res.status(400).send("invalid data input");
    }
})

//2-step-authentication

router.post("/Brands_otp_send",async(req,res)=>{
    try{
        const email=req.body.email;
        const user_email=await Brand_detail.findOne((email));
        var mailoption={
            to:req.body.email,
            subject:"otp for registration is:",
            html:"<h3>otp for account verification is</h3>"+otp
        };
        transporter.sendMail(mailoption,(error,info)=>{
            if(error){
                return console.log(error);
            }
            console.log('message sent:%s',info.messageId);
            console.log('preview url :%s',nodemailer.getTestMessageUrl(info));
            res.render('otp');
        })
    }catch(err){
        res.send(err,"otp is invalid");
    }
})




router.post("/Brands_verify_otp",(req,res)=>{

    if(req.body.otp==otp){
        res.send("You has been successfully registered");
    }
    else{
        res.render('otp',{msg : 'otp is incorrect'});
    }
})  



router.post("/Brands_resend_otp",(req,res)=>{
    var mailOptions={
        to: email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp',{msg:"otp has been sent"});
    });

})



router.get("/Get_Brands_data/:id",async(req,res)=>{
    try{
        const  _id=req.params.id;
        const Brand_data= await Brand_detail.findById(_id);
        if(!Brand_data){
            return res.status(400).send();
        }else{
            res.send(Brand_data);
        }
    }
    catch(err){
        res.send(err);
    }
})


router.get("/Get_Brands_data",async(req,res)=>{
    try{
       const Brands_data =await Brand_detail.find();
       res.send(Brands_data);

    }catch(err)
    {
        res.send(err);
    }
})
module.exports = router;