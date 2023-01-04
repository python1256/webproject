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
const cookieparser=require("cookie-parser");
const auth=require("./middleware/auth");
const fileupload=require("express-fileupload");

const staticpath=path.join(__dirname,'./src');
var allowedDomains = ['http://localhost:3000','https://sample-domain.tech/'];
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options('*', cors()); 

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
    next();
});
app.use('/uploads', express.static('./uploads')); 
app.use(fileupload({
    useTempFiles:true
}));
app.use(cookieparser());
//app.engine('handlebars',exphbs({extname:"hbs",defaultLayout:false,layoutDir:"views/"}));
app.set('veiw engine','handlebars');

//app.use('/image',express.static('upload/images'));

//calling
app.use(express.static(staticpath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/paruvedi.html'));
});

const routes = require("./contoller/user");
const { addPath } = require('graphql/jsutils/Path');
app.use('/', routes)
app.listen(PORT,host,()=>
{
    console.log(`listening to port at ${PORT}`);
})

