const mongoose=require("mongoose");
const updatepageschema = new mongoose.Schema({
   dob:{
      type:Date,
   },
   gender:{
    type:String,
   },
   categories:{
    type:String
   }
})
const update_stor =new mongoose.model('update_stor',updatepageschema);

module.exports=update_stor;
