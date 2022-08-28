const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
userId:{
    type:String,
    ref:'User'
},
productId:{
    type:String,
    ref:'product'
},
amount:Number,
isFreeAppUser:{
    type:Boolean,
    default:false
},
date:String

}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) //users