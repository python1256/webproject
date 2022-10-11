const mongoose = require('mongoose');
const validator=require('validator');
const adminschema = new mongoose.Schema({
    admin_name:{
        type : String,
        required : true,
        minlength:3
    },
    email:{
        type:String,
        unique:[
            true,"Email is mandatory"
        ],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        },
        required:[
            true,"email filed is mandatory"
        ]
    },
    password:{
        type : String,
        required:[true]
    },
    repassword:{
        type : String,
        required:[true]
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        maxlength:10,
        minlength:10,
        unique:true,
        required:true
    }
})


const admin_detail=new mongoose.model('admin_detail',adminschema);

module.exports=admin_detail;