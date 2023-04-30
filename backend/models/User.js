const mongoose = require('mongoose');


const UserSchema = new Schema(
    {
        name: {
             type: String, 
            require: true
         },

        email: {
             type: String, 
            require: true, 
            unique: true

         },
  password :{
    type: String, 
    require: true
  },
  date : {
    type : date,
    default: Date.now
  }

    }
);


  //here we create  schema se model
  
module.exports= mongoose.model('user',UserSchema);

