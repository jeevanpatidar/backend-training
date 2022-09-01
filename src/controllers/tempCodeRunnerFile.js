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