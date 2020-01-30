
const routes =require("express").Router();
const mongoose=require('mongoose')
var userschema =mongoose.Schema({
    title: String
  });
  var userdata=mongoose.model("person",userschema);

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

// routes.get("/abc",function(req,res){
//    const     id= "yooo"
   
//    res.json(id)
// })

routes.get("/abc",function(req,res){
    userdata.find({}).exec(function(err,userdata){
        if(err){
            console.log("retrieve error")
        }else{
            res.json(userdata)
        }
    })
    
})

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
module.exports=routes;