const mongoose=require("mongoose");
const updatepageschema = new mongoose.Schema({
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
const update_stor =new mongoose.model('update_stor',updatepageschema);

module.exports=update_stor;
