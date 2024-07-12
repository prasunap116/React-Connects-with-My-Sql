const express= require('express');

const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const mysql = require('mysql');
const db= mysql.createConnection(
    {
        host:"localhost",
        port:3307,
        database:'info',
        user:'root',
        password:''
    }
)
// app.get('/',(req,res)=>{
//     res.send('hru')
// })
app.get('/',(req,res)=>{
    const sql="SELECT * FROM student"
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }
    })
})
app.post('/student',(req,res)=>{
    const sql="INSERT INTO student (`name`,`email`) VALUES(?)"
    const values= [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values],(err,result)=>{
        if (err){
           res.json(err)
        }
        else{
            res.json(result)
        }
    })
})

app.listen('8000',()=>{console.log('8000 is running')})