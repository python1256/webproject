const mongoose=require("mongoose");
//const validator=require('validator');
const Linkschema = new mongoose.Schema({
    Instagram_Link:{
        type:String,
        
    },
    Facebook_Link:{
        type:String,
        
    },
    tiktok_Link:{
        type:String,
        
    },
    Youtube_Link:{
        type:String,
        
    },
    Twitter_Link:{
        type:String,
        
    },
    website_Link:{
        type:String,
        
    }
})
const InfluencerLink_store=new mongoose.model('InfluencerLink_store',Linkschema);

module.exports=InfluencerLink_store;
