const mongoose = require("mongoose");
const validator=require('validator');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
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
        type : String
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
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]


})
adminschema.methods.generateAuthToken=async function(){
    try{
    const paru = await jwt.sign({ _id:this._id},process.env.SECRET_FOR_TOKEN);
    this.tokens=this.tokens.concat({token:paru});
    await this.save();
    console.log(token);
    return token;
    }catch(error){
        console.log(error);
    }
}

adminschema.pre("save",async function(next){
    if(this.isModified("password")){
        const passwordhash= await bcrypt.hash(password,10);
        this.password= await bcrypt.hash(this.password,10);
        this.repassword=undefined;
    }
    next();
})


const admin_detail=new mongoose.model('admin_detail',adminschema);

module.exports=admin_detail;