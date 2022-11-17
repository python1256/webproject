const mongoose=require("mongoose");
//const validator=require('valid-url');
const Linkschema = new mongoose.Schema({
    Instagram_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"email filed is mandatory"
        ],
    },
    Facebook_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"link filed is mandatory"
        ],
    },
    tiktok_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"link filed is mandatory"
        ],
    },
    Youtube_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"link filed is mandatory"
        ],
    },
    Twitter_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"email filed is mandatory"
        ],
    },
    website_Link:{
        type:String,
        unique:[
            true,"link is mandatory"
        ],
        required:[
            true,"link filed is mandatory"
        ],
    }
})
const BrandsLink_store=new mongoose.model('BrandsLink_store',Linkschema);

module.exports=BrandsLink_store;
