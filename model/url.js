const mongoose=require("mongoose");
const Imagschema = new mongoose.Schema({
   url:{
    type:String
   },
})
const Imag_stor=new mongoose.model('Imag_stor',Imagschema);

module.exports=Imag_stor;
