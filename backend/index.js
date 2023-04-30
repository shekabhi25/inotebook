// const connectToMongo=require('./db');

// const express=require();

// connectToMongo();

// const app=express();

// const port=3000;

// app.get('/',(req,res)=>
// {
//     res.send("hello node");
// })

// app.listen(port,()=>
// {
//     console.log(`http://localhost${port} `)

// })


const connectToMongo=require("./db");

connectToMongo();


const express=require("express");


const app=express();
const port=3000;

// app.get('/',(req,res)=>
// {
//     res.send("hello req");
// })
app.get('/',(req,res)=>
{
    res.send("home")
})
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.listen(port,()=>
{
     console.log(`http://localhost${port}`);
})
