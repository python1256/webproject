const jwt=require("jsonwebtoken");
const influencer_Register=require("../model/Influencers_model");
const  brands_register=require("../model/brands_model");
const users_Register=require("../model/user_model");
const admin_register=require("../model/admin_model");

const auth = async(req,res,next)=>{
    try{
        const token= req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET_FOR_TOKEN);
        console.log(verifyuser);
        const user=await influencer_Register.findOne({_id:verifyuser._id});
        req.token=token;
        req.user=user;
        next();

    }catch(err){
        res.status(401).send(err,"you are not validated!!");

    }
}
const auth1 = async(req,res,next)=>{
    try{
        const token= req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET_FOR_TOKEN);
        console.log(verifyuser);
        const user=await brands_register.findOne({_id:verifyuser._id});
        req.token=token;
        req.user=user;
        next();

    }catch(err){
        res.status(401).send(err,"you are not validated!!");

    }
}
const auth2 = async(req,res,next)=>{
    try{
        const token= req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET_FOR_TOKEN);
        console.log(verifyuser);
        const user=await users_Register.findOne({_id:verifyuser._id});
        req.token=token;
        req.user=user;
        next();

    }catch(err){
        res.status(401).send(err,"you are not validated!!");

    }
}
const auth3 = async(req,res,next)=>{
    try{
        const token= req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET_FOR_TOKEN);
        console.log(verifyuser);
        const user=await admin_register.findOne({_id:verifyuser._id});
        req.token=token;
        req.user=user;
        next();

    }catch(err){
        res.status(401).send(err,"you are not validated!!");

    }
}


module.exports={auth,auth1,auth2,auth3};