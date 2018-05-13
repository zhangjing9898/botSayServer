/**
 * Created by Danny on 2015/9/26 15:39.
 */
var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var path=require("path");
var fs = require("fs");
var gm = require("gm");
var sd = require("silly-datetime");
var  ObjectId = require('mongodb').ObjectID;
var http=require("http");
var querystring=require("querystring");
var request=require("request");
//标记单词
exports.markWord=function (req,res,next) {
    var word=req.query.word;
    console.log(req.query);
    //插入数据
    db.insertOne("markWord",{
        "word":word
    },function (err,result) {
        if(err){
            res.send("-1");
            return;
        }
        res.send("1");
    })
}

//读取单词
exports.readWord=function (req,res,next) {
    db.find("markWord",{},function (err, result) {
        // res.json(result);
        console.log(result);
        //将json changeto array
        var wordArray=[];
        var all=[];
        iterator(0);
        function iterator(i) {
            if(i == result.length) {
               // console.log(wordArray);
               return;
            }
            wordArray.push(result[i].word);
            iterator(i + 1);
        }
        var json={};
        for(var i=0;i<wordArray.length;i++){
            var wordName="word"+(i+1);
            json[wordName]=wordArray[i];
        }
        request.post({
            url:'http://139.219.2.212:20021/hotel',
            formData:json
        },function (error,response,body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.send("123");
        });
    })
}

exports.postInfo=function(req,res,next) {
    var formData={
        word1:"book",
        word2:"room",
        word3:"reservation",
        word4:"weather"
    };
    console.log(typeof formData);
    request.post({
        url:'http://139.219.2.212:20021/hotel',
        formData:formData
    },function (error,response,body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.send("123");
    })
}



