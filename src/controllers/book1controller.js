const bookModel = require("../models/book1Modals")

const createbook= async function(req,res){
    var data = req.body
    let savedData=await bookModel.create(data)
    res.send({msg:savedData})
}

const getbooksData= async function(req,res){
    let allbooks=await bookModel.find()
    res.send({msg:allbooks})
}

module.exports.createbook=createbook

module.exports.getbooksData=getbooksData