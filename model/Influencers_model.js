const mongoose = require("mongoose");
const validator = require("validator");
const Influencerschema= new mongoose.Schema({
    Influencer_name:{
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
    phone:{
        type:Number,
        maxlength:10,
        minlength:10,
        unique:true,
        required:true
    },
    
    Instagram_username:{
        type:String,
        required:true
    }


})

const influencer_detail=new mongoose.model('influencer_detail',Influencerschema);
module.exports=influencer_detail;