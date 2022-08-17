const batchName="plutonium"

let printName=function(req , res ){
   console.log('my batch name is',batchName)

}
module.exports.name=batchName
module.exports.printName=printName