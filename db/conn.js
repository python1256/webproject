const mongoose = require('mongoose');
mongoose.connect("mongodb://tll-db-new:MhgZPAIxcc2m61bSK3DXW7KSghAaqSOotdiHlVQuRzi5bQ9QYWhM1yVS1BGpvQT6loFq2J4SNCU6F1cScbXqOw==@tll-db-new.mongo.cosmos.azure.com:10255/paru_db?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@tll-db-new@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
