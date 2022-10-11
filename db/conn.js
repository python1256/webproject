const mongoose = require('mongoose');
mongoose.connect("mongodb://influencer-db:d1oLzPnOirNkuglYIOjgA9pzt1jr5reFGVMpMWJTd4QlyHUr32kGxUwkSJLuBoJDOoJfXJMwvUpuGHFZCNmcmg==@influencer-db.mongo.cosmos.azure.com:10255/paru_db?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@influencer-db@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
