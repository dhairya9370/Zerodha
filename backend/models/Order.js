const {model}=require('mongoose');
const {OrderSchema}=require('../schemas/Order');
const Order=new model('order',OrderSchema);
module.exports={Order};