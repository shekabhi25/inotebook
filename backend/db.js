// const { mongoose } = require('mongoose');
// const mongo=require('mongoose');

// const { default: mongoose } = require("mongoose");

// const mongourl="link";

 
// const connectToMongo=()=>
// {
//     mongoose.connect(mongourl,()=>
//     {
//         console.log("connected to mongo")

//     })
// }

// module.exports=connectToMongo; 


// connection to monngoDB database


// const mongoose=require("mongoose");

// const mongourl="mongodb://localhost:27017";



// const connectToMongo=()=>
// {

//     mongoose.connect(mongourl,()=>
//  {
//     console.log("conected");
//  });



// }


// module.exports=connectToMongo;



const mongoose = require("mongoose");

const mongourl = "mongodb://127.0.0.1:27017";


const connectToMongo = () => {
    mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB", err);
      });
  
};

module.exports = connectToMongo;
