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
  xyz.status(200).send({msg:"server error",error:err})
}};