const express=require("express")//require- u must use 
const app=express();// express is a framework or library aashan askhtdm get w post etc
let students= require ("./database"); //kda the database in the other file is assigned to this variable "students"
//./database= path of the file
app.get("/testfile", (req,res)=> {
    res.send(students)//sending the list now
}); 
app.listen(8080,()=>{
    console.log("server is running on port 8080");
});

