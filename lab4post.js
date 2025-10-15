const express=require("express")
const app=express();
let students= require ("./database");
app.post("/testfile2", (req,res)=>{
    const{newStudent}=req.body;
})
students.push(newStudent);//akeno hat a new student in my database
res.json({message:"student added successfully",students});
app.listen(9090,()=>{
    
})

