const express = require('express');
const cors=require("cors");
const app=express();
const PORT = process.env.PORT || 8080;
const host='0.0.0.0';
const nodemailer = require("nodemailer");
const path = require("path");
require("./db/conn");
const exphbs = require("express-handlebars");
const bodyparser =require("body-parser");
app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials:true,
        optionsSuccessStatus:200
    }
)); 
//app.engine('handlebars',exphbs({extname:"hbs",defaultLayout:false,layoutDir:"views/"}));
app.set('veiw engine','handlebars');

app.use('/image',express.static('upload/images'));

//calling

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
const routes = require("./contoller/user")
app.use('/', routes)
app.listen(PORT,host,()=>
{
    console.log(`listening to port at ${PORT}`);
})

