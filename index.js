
const express = require('express');
const app=express();
const port =process.env.Port || 8080;
const nodemailer = require("nodemailer");
const path = require("path");
require("./db/conn");
const exphbs = require("express-handlebars");
const bodyparser =require("body-parser");

//app.engine('handlebars',exphbs({extname:"hbs",defaultLayout:false,layoutDir:"views/"}));
app.set('veiw engine','handlebars');




app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
const routes = require("./contoller/user")
app.use('/', routes)
app.listen(port,()=>
{
    console.log(`listening to port at ${port}`);
})

