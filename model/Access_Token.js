const mongoose=require("mongoose");
const Access_tokenschema = new mongoose.Schema({
    short_access_token: {type:String,default:null},
    long_access_token:{type:String,default:null},
});
const Access_token=new mongoose.model('Access_token',Access_tokenschema);

module.exports=Access_token;
