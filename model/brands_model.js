const mongoose = require('mongoose');
const validator = require("validator");
const Brandsschema = new mongoose.Schema({
    Brands_name:{
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
    },
    date:{
        type :Date,
        default : Date.now
    },
    Brands_Ig_username:{
        type:String,
        required:true,
        unique:true
    }

})


const Brands_detail=new mongoose.model('Brands_detail',Brandsschema);

module.exports=Brands_detail;