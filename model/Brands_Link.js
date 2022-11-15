const mongoose=require("mongoose");
const validator=require('valid-url');
const Linkschema = new mongoose.Schema({
    Instagram_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    },
    Instagram_follower:{
        typeof:String,
    },
    Facebook_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"link filed is mandatory"
        ],
    },
    Facebook_Likes:{
        typeof:String,
    },
    tiktok_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"link filed is mandatory"
        ],
    },
    tiktok_follower:{
        typeof:String,
    },
    Youtube_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"link filed is mandatory"
        ],
    },
    Youtube_Subscribers:{
        typeof:String,
    },
    Twitter_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    },
    Twitter_follower:{
        typeof:String,
    },
    website_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        validate(value){
            if(!validator.isUri(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"link filed is mandatory"
        ],
    }
})
const BrandsLink_store=new mongoose.model('BrandsLink_store',Linkschema);

module.exports=BrandsLink_store;
