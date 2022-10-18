const mongoose=require("mongoose");
const Imageschema = new mongoose.Schema({
   name:String,
   desc:String,
   img:{
    data:Buffer,
    contentType:String
   }
});
const Image_store=new mongoose.model('Image_store',Imageschema);

module.exports=Image_store;
