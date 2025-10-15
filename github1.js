const express= require('express');
const app= express();
app.use(express.json()); // so i could input my data in json form
app.post('isEven',(req,res)=>{
    const {number}= req.body;
    let isEven=false;
    if(number%2==0){
        isEven=true;
    }
    else{
        isEven=false;
    }
    res.send({even: isEven});
});
app.listen(3000,()=>{
    console.log("server is running on port 8080");
});


