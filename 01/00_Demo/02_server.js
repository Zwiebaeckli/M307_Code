//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app = express();//??
//??
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Running at Port ${port}`);

//Data
const studentData = require(`./datastudents.json`)
//Routes with different versions
const router_v1 = express.Router();
const router_v2 = express.Router();
//Route Version 1
app.use('/api', router_v1)

router_v1.get('/students', (req,res) =>{
    res.send("students api not yet implemented!");
   });


//POST request
router_v1.post('/students', (req,res) =>{
    res.send(`${req.method} students api not yet implemented!`);
});

//Route Version 2
//send data when requesting /api/students
router_v2.get('/v2/students', (req,res) =>{
    res.send(studentData);
   });
