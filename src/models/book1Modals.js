 const mongoose = require ('mongoose');

 const bookSchema=new mongoose.Schema({
bookName:{ 
    type : String,
    required: true
},
authorName:{
    type:String
} ,
category: String,
year: Number,
 },{timestamps: true});

 module.exports=mongdel('User',bookSchema) //user