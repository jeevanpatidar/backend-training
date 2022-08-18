const { count } = require("console")
const authorModel = require("../models/authorModal")

//-----------------------------------------------------------------------------------------------------
const createAuthor = async function (req, res) {
   let data = req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})
}

//---------------------------------------------------------------------------------------------------

const findauthor = async function (req, res) {
    let book = await bookModel.findone({ name : "Two states" } , { $set: { price : 100} } , { new : true } ).select({ _id : 0,author_id : 1 }) 
    let updatePrice = book.price
    let author = await authorModel.findone({author_id:book.author_id})
    let author_name = author.author_name
    res.send({author:author_name,price:updatePrice})
}

//----------------------------------------------------------------------------------------------------
const listBooks = async function (req, res) {
    let author = await authorModel.findone({author_name : "Chetan Bhagat"}).select({ _id : 0,author_id :1 })
    let id= author.author_id
    let books = await bookModel.find({author_id:{$eq : id}})
    res.send({msg: books})
}



module.exports.createAuthor=createAuthor
module.exports.findauthor=findauthor
module.exports.listBooks=listBooks
