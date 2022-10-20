const mongoose = require('mongoose');
const validator=require('validator');
const jwt=require("jsonwebtoken");

const userschema = new mongoose.Schema({
    user_name:{
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
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})

userschema.methods.generateAuthToken=async()=>{
    try{
    const paru = await jwt.sign({ _id:this._id},process.env.SECRET_FOR_TOKEN);
    this.tokens=this.tokens.concat({token:paru})
    await this.save();
    console.log(token);
    return token;
    }catch(error){
        res.send(error);
        console.log(err);
    }
}



const users_detail=new mongoose.model('users_detail',userschema);

module.exports=users_detail;