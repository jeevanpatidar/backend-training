const mongoose = require ('mongoose');

const bookSchema=new mongoose.Schema({
    bookName:{
        type : String,
        required: true
    },
    authorName:{
      type:String
    },
    prices: {
      indianPrice:String,
      europeanPrice:String
    },
    year: Number,
    tags: [String],
    totalPages :{type:Number,default:500},
    stockAvailable:{
      type: Boolean,
    },
}, {timestamps: true});

module.exports=mongoose.model('Book',bookSchema) 