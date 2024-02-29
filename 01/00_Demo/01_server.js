//Add module express
const express = require('express');
//Important: DO NOT FORGET round braces!
const app = express();//??
const port = 4501;//??

app.listen(port);//??
console.log(`Server running on port ${port}`);//??


//GET request
app.get('/api/v1/students', (req,res) =>{
    res.send("students api not yet implemented!");
});


//POST request
//??
//??
//??

//??
//??
//??
