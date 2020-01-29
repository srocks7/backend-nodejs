
const routes =require("express").Router();
const mongoose=require('mongoose')
var userschema =mongoose.Schema({
    title: String
  });
  var userdata=mongoose.model("user",userschema);
routes.get("/",function(req,res){
    res.send({
        ok :true
    })
})
routes.get("/a",function(req,res){
    userdata.find({}).exec(function(err,userdata){
        if(err){
            console.log("retrieve error")
        }else{
            res.send(userdata)
        }
    })
    
})
module.exports=routes;