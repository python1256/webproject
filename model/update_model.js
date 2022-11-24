const mongoose=require("mongoose");
const updatepageschema = new mongoose.Schema({
   username:{
      type:String,
   },
   DOB:{
      type:String,
   },
   GENDER:{
    type:String,
   },
   CATEGORIES:{
    type:String
   }
})
const update=new mongoose.model('update',updatepageschema);

module.exports=update;
