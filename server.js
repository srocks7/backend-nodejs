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
// var userschema =mongoose.Schema({
//   title: String
// });
// var userdata=mongoose.model("user",userschema);

// // userdata.create({
// //   title: "Noob master 69"
// // },function(err,data){
// //   if(err){
// //     console.log("Adding problem");
// //     console.log(err);
// //   }else{
// //     console.log("Data added");
// //     console.log(data);
// //   }
 
// // }
// // );


// app.get('/add', function (req, res) {
//   userdata.find({}).exec(function(err, userdata) {
//     if(err){
//       console.log("Retrieving Error")
//     }else{
//       res.json(userdata);
//     } 
//   })
// })

// app.get('/add/:postid',function(req,res){
//   userdata.findOne({_id:req.params.postid}).exec(function(err,userdata){
//     if(err){
//       console.log("Retrieving Error")
//     }else{
//       res.send(userdata);
//       console.log(userdata);
//     } 
//   })
//   })


// app.post('/add',async function(req,res){
//   const userIn = new userdata({
//         title: req.body.title,
    
//       });
//   userIn.save(function(err,userIn){
//     if(err){
//       console.log("Input error");
//       console.log(err);
//     }else{
//       console.log("Data inserted");
//       res.send(userIn);
//     }
//   })
// })

// app.put('/add/:postid',function(req,res){
//   userdata.findByIdAndUpdate({_id:req.params.postid},req.body,{new : true}).exec(function(err,userdata){
//     if(err){
//       console.log("Updating Error")
//     }else{
//       res.send(userdata);
//       console.log("Data update");
//     } 
//   })
//   })

//   app.delete('/add/:postid',function(req,res){
//     userdata.findByIdAndRemove({_id:req.params.postid}).exec(function(err,userdata){
//       if(err){
//         console.log("Deleting Error")
//       }else{
//         res.send(userdata);
//         console.log("Data deleted");
//       } 
//     })
//     })
// app.post('/add/:id', async (req, res) => {
//   console.log("Data.........")
//   console.log(req.params)
//   const user = new User({
//     title: req.params.id,

//   });
//   user.save(function (err) {
//     if (err) return console.error(err);
//   });
//   console.log("res", user)
//   res.status(200).send({
//     success: 'true',
//     message: 'user Created',
//     user,
//   })
// });

// app.get("/get/data", async (req, res) => {
//   console.log("called")
//   var result = await User.find().exec();
//   res.status(200).send({
//     success: 'true',
//     message: 'tournament get Success',
//     result
//   })
// });
 
app.listen(port, console.log(`server running on port ${port}`))