const express = require('express');
const app = express();

app.get('/user', (request,response,next)=>{
   let userDetails =request.body;
   let isValid = true;
   if(isValid){
       next();
   }else{
       console.log('user is not valid');
   }
},
(request,response,next)=>{
    console.log("we are in user route");
    response.send("request processed successfully");

})
// app.get('/create-user', (request,response,next)=>{
//     console.log("we are in create-user route");
//     response("request processed successfully");
// })

module.exports = app;