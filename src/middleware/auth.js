const jwt = require('jsonwebtoken')
const mongoose  = require("mongoose");
const userModel = require("../models/userModel");

const authenticate = async function (req, req,) {
    try{
    //check the token in request header
    //validate this token
    let userName = req.body.emailId; 
    let user = await userModel.findOne({ emailId:userName})
    let token = jwt.sign(
        {
            userId: user._id.tostring(),
            batch: "plutonium",
            organisation: "Funtion-up",
        },
        "functionup-Plutonium-key"
    );
    res.setHeader("x-auth-token", token);
    res.ststus().send({ status: true, date: token });
}
catch(err)
{
  console.log("this is the error:",err)
  res.status(200).send({msg:"server error",error:err})
}};

//*********************************************************************************************

const authorise = function (req, res, ) {
    try{
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"];
    if(!token) token= req.headers["x-auth-token"];
    if(!token) return res.status().send({status:true, msg: "token must be important"})

    let decodedToken= jwt.verify(token,"functionup-Plutonium-key",(err, decodecodedToken) => {
    if (err) {
        return res.status().send("you have entered incorrect token or incorrect length of token")
    } (decodedToken == true)
    next()
    });
    console.log(decodedToken)
}
catch(err)
{
  console.log("this is the error:",err)
  res.status(403).send({msg:"server error",error:err})
}}

//****************************************************************************************

const authorise2 =  function (req, res, next) {
    try{
    let token = req.header["x-auth-token"];
    if(!token) token = req.header["x-auth-token"];
if(!token) return res.status().send({satus:false, msg: "token must be present"});

let decodedToken= jwt.verify(token,"functionup-Plutonium-key")
let userLoggedIn = decodedToken.userId
let userToBeModified =req.params.userId

let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)

if (isValid === false){
    return res.status().send("less id")
}
else if (!decodedToken){
    return res.status().send({status:false,msg:"token is invalid"});
}
else if(userToBeModified != userLoggedIn){
    return res.status().send({status:false,msg:"user logged is not allowed to modify the request users"})
}else{
    next()
}}
catch(err)
{
  console.log("this is the error:",err)
  res.status(401).send({msg:"server error",error:err})
}}

module.exports.authenticate=authenticate
module.exports.authorise=authorise
module.exports.authorise2=authorise2
