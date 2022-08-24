const publiserModel= require("../models/publiserModel")

const createPublisher= async function (req, res) {
    let publiser = req.body
    let publiserCreated = await publiserModel.create(publiser)
    res.send({data: publiserCreated})
}

module.exports.createPublisher=createPublisher

