const mongoose=require("mongoose");
const Access_tokenschema = new mongoose.Schema({
    access_token: {type:String,default:null},
    token_type:{type:String,default:null},
    expires_in:{
        type:Number
    }
});
const Access_token=new mongoose.model('Access_token',Access_tokenschema);

module.exports=Access_token;
