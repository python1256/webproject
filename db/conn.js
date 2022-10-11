const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ooo_db",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}).then((db)=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("no connection",err);
})
