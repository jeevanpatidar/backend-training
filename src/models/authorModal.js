const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    name:String,
    author_id:{
        type :Number,
        required:true
    },
    price:Number,
    rating:Number,
    age: Number,
    address:String
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema) //author





