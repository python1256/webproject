const mongoose = require("mongoose");
const validator = require("validator");
require("dotenv").config();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const Influencerschema= new mongoose.Schema({
    Influencer_username:{
        type:String,
        required : true,
        unique:true
    },
    Influencer_Firstname:{
        type : String,
        required : true,
        minlength:3
    },
    Influencer_Lastname:{
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
    Street_Address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    postal_code:{
        type:String,
        required:true
    },
    password:{
        type : String,
        required:[true]
    },
    repassword:{
        type : String,

    },
    phone:{
        type:Number,
        maxlength:10,
        minlength:10,
        unique:true,
        required:true
    },
    
    Instagram_link:{
        type:String,
        required:true
    },
    
})

Influencerschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.repassword=undefined;
    }
    next();
})

const influencer_detail=new mongoose.model('influencer_detail',Influencerschema);
module.exports=influencer_detail;