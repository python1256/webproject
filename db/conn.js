const mongoose = require('mongoose');
mongoose.connect("mongodb://influencer-db:1VSqcTY4CC104Gfp4eJP8BvgXmh8PNTaFyMjOnwjYifEwFKn6iohFMIJHpUWVmwgnxaiZ6hN5X3GACDbYYNqbQ==@influencer-db.mongo.cosmos.azure.com:10255/parudb?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@influencer-db@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
