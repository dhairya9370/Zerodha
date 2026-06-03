const {model}=require('mongoose');
const {HoldingSchema}=require('../schemas/Holding');
const Holding=new model("holding",HoldingSchema);
module.exports={Holding};