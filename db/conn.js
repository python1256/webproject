const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://paru123:jaigopal123_@cluster0.trzg2kg.mongodb.net/test").then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
