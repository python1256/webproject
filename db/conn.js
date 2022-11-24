const mongoose = require('mongoose');
mongoose.connect("mongodb://influencer-db:A9lfIMFBNChXdkwfIiwfl0niqLQf3HyWRNwknuW2eu6VWkh3cjfKbTjGRVrNoDNNjuVCfNiPDT9RACDbppbzxg==@influencer-db.mongo.cosmos.azure.com:10255/parudb?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@influencer-db@").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
