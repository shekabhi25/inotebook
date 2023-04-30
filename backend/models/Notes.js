const mongoose = require('mongoose');


const NotesSchema = new Schema(
    {
        tittle: {
             type: String, 
            require: true
         },

        desc: {
             type: String, 
            require: true, 
            unique: true

         },
tag :{
    type: String, 
    default: "General"
    // require: true
  },
  date : {
    type : date,
    default: Date.now
  }

    }
);


  //here we create  schema se model
  
module.exports= mongoose.model('notes',NotesSchema);

