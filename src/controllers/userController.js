const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.status(200).send({ msg: savedData });
}
catch(err)
{
  console.log("this is the error:",err)
  xyz.status(200).send({msg:"server error",error:err})
}}

//***************************************************************************************


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(200).send({status: false,msg: "username or the password is not corerct",});
  }
  catch(err)
  {
    console.log("this is the error:",err)
    res.status(200).send({msg:"server error",error:err})
  }}
  
//***********************************************************************************************

const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.status().send({ status: false, msg: "token must be present" });

  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.status().send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status().send({ status: false, msg: "No such user exists" });

  res.status().send({ status: true, data: userDetails });
  }
  catch(err)
  {
    console.log("this is the error:",err)
    res.status().send({msg:"server error",error:err})
}}


//*************************************************************************************

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status().send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
catch(err)
{
  console.log("this is the error:",err)
  res.status(401).send({msg:"server error",error:err})
}}

//*********************************************************************************************

const deleteUser = async function(req, res) { 
  try{   
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.status().send({status: false, message: "no such user exists"})
  }else{
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.status().send({status: true, d1 :"user data successfully", data: updatedUser})
}}
catch(err)
{
  console.log("this is the error:",err)
  res.status(200).send({msg:"server error",error:err})
}}

//*********************************************************************************************

const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status().send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status().send({status: true, data: updatedUser})
  }
  catch(err)
  {
    console.log("this is the error:",err)
    res.status(404).send({msg:"server error",error:err})
  }}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
module.exports.postMessage = postMessage