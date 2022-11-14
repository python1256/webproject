const mongoose=require("mongoose");
const validator=require('url-validator');
const Linkschema = new mongoose.Schema({
    Instagram_Link:{
        type:String,
        unique:[
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
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
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    },
    Facebook_Likes:{
        typeof:String,
    },
    tiktok_Link:{
        type:String,
        unique:[
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    },
    tiktok_follower:{
        typeof:String,
    },
    Youtube_Link:{
        type:String,
        unique:[
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    },
    Youtube_Subscribers:{
        typeof:String,
    },
    Twitter_Link:{
        type:String,
        unique:[
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
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
            true,"Email is mandatory"
        ],
        validator(value){
            if(!validator(value)){
                throw new Error("invalid url")
            }
        },
        required:[
            true,"email filed is mandatory"
        ],
    }
})
const InfluencerLink_store=new mongoose.model('InfluencerLink_store',Linkschema);

module.exports=InfluencerLink_store;