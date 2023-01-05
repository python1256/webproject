const mongoose=require("mongoose");
const updatepageschema = new mongoose.Schema({
   username:{
      type:String,
   },
   dob:{
      type:Date,
   },
   gender:{
    type:String,
   },
   categories:{
    type:String
   },
   image:{
      type:String
   }
})
const update_stor =new mongoose.model('update_stor',updatepageschema);

module.exports=update_stor;
