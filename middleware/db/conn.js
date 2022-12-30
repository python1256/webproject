const mongoose = require('mongoose');
mongoose.connect("mongodb://influencerdb:mIBNP0kGGV1ZuhdhGs9thaJNmRiUI9DAywEIc2JThhB0E898Jmru2CIyopKWkyWTuiTNUBTYvBilACDb8tS5IQ==@influencerdb.mongo.cosmos.azure.com:10255/parudb?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@influencerdb@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
