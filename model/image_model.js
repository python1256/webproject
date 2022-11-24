const mongoose=require("mongoose");
require("./db/conn2");
const Imageschema = new mongoose.Schema({
   name:{
      typeof:String,
   },
   image:{
    data:Buffer,
    contentType:String
   }
})
const Image_store=new mongoose.model('Image_store',Imageschema);

module.exports=Image_store;
