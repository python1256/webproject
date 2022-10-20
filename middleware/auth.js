const jwt=require("jsonwebtoken");
const users_Register=require("../model/user_model");


const auth = async(req,res,next)=>{
    try{
        const tokn= req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET_FOR_TOKEN);
        console.log(verifyuser);
        const user=await users_Register.findOne({_id:verifyuser._id});
        next();

    }catch(err){
        res.status(401).send(err,"you are not validated!!");

    }
}

module.exports=auth;