const express = require('express')
const app = express()
const mongoose=require('mongoose')
const bodyparser=require("body-parser")
 const port=3001
 
app.use(bodyparser.json())
app.use("/d",require("./Model/User"))
mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://saim:saim1234@cluster0-qv7jb.mongodb.net/test?retryWrites=true&w=majority",
{
  useNewUrlParser:true,
  useUnifiedTopology:true
},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Database connected");
  }
});

app.listen(port, console.log(`server running on port ${port}`))