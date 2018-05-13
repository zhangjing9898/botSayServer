var express = require("express");
var app = express();
var router = require("./router/router.js");

var session = require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//模板引擎
app.set("view engine","ejs");
//静态页面
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));
var cors=require("cors");
var sd=require("silly-datetime");
app.use(cors());

//路由表
app.get("/markWord",router.markWord);       //标记单词
app.get("/readWord",router.readWord);       //读取单词
app.get("/postInfo",router.postInfo);

app.listen(3000);
