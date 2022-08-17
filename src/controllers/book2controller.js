const book2Models = require("../models/book2Modals")

const createbook= async function(req,res){
    var data = req.body
    let savedData=await book2Models.create(data)
    res.send({msg:savedData})
}

const booklist= async function(req,res){
    let savedData=await book2Models.find().select({bookName:1,authorName:1,id:0})
    res.send({msg:savedData})
}

const getBooksInYear= async function(req,res){
    let savedData=await book2Models.find({year:{$eq:req.body.year}})
    res.send({msg:savedData})
}
const getParticularBooks= async function(req,res){
    let savedData=await book2Models.find({year:2000,bookName:"jp"})
    res.send({msg:savedData})
}
const getXINRBooks= async function(req,res){
    let savedData=await book2Models.find({"Pice.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:savedData})
}
const getRandomBooks= async function(req,res){
    let savedData=await book2Models.find({$or:[{stockavailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:savedData})
}
module.exports.createbook=createbook

module.exports.booklist=booklist

module.exports.getBooksInYear=getBooksInYear

module.exports.getParticularBooks=getParticularBooks

module.exports.getXINRBooks=getXINRBooks

module.exports.getRandomBooks=getRandomBooks
