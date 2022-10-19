const mongoose = require('mongoose');
mongoose.connect("mongodb://influencer-db-new:ZLP1LJkDFRP8Ho1Fcd6BYKZoU0YxqMgSrmSG3yAPGeP5Tzn9g1zZeheKkx6GQAkv8cTe6krl1syUzhaqItGRpw==@influencer-db-new.mongo.cosmos.azure.com:10255/paru_db?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@influencer-db-new@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
