const express = require('express');
const cors=require("cors");
require("dotenv").config();
const app=express();
const PORT = process.env.PORT || 8080;
const host='0.0.0.0';
const nodemailer = require("nodemailer");
const path = require("path");
require("./db/conn");
const exphbs = require("express-handlebars");
const bodyparser =require("body-parser");
app.use(cors()); 
//app.engine('handlebars',exphbs({extname:"hbs",defaultLayout:false,layoutDir:"views/"}));
app.set('veiw engine','handlebars');



//calling

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.get("/get-auth-code", (req, res, next) => {
    return res.send(
      `<a href='https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=user_media,user_profile&response_type=code'> Connect to Instagram </a>`
    );
  });
const routes = require("./contoller/user")
app.use('/', routes)
app.listen(PORT,host,()=>
{
    console.log(`listening to port at ${PORT}`);
})

