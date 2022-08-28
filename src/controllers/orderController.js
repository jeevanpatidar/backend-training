const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel")

const createorder= async function (req, res) {
    let data= req.body
    let UId=data.userId
    let PId=data.productId

//if(!userId){
  // return res.send({msg:'userId is mantatory in the request'})
//}else if(!productId){
  //  return res.send("please enter valid productId")
//}
let userId = await userModel.findById(UId)
let productId = await productModel.findById(PId)

if(!userId){
    return res.send({msg:'userId is mantatory in the request'})
 }else if(!productId){
     return res.send("please enter valid productId")
 }
 
if(!userId){
return res.send("this userId id is not found in user database")
}else if(!productId){
return res.send("this productId id is not found in product database")
}else {}

let token =req.headers.isfreeappuser
console.log(token)
let val = 0    //if isfreeapuser is true
if(token === 'true'){
    data.amount = val
    data.isfreeappuser=token
   let savedData =await orderModel.create(data)
    res.send({data :savedData})
}  //if isfreeapuser is false
else if (userId.balance >= productId.price){
    await userModel.findOneAndUpdate({_id:userId},
        {$set:{balance:userId.balance - productId.price} })
        data['amount'] = productId.price;
        data['isfreeappuser'] = req.headers.isfreeappuser;

        let savedData =  await orderModel.create(data)
        res.send({msg:savedData}) 
    }else{
res.send("insufficient Balance!")
    }
}
module.exports.createorder=createorder
