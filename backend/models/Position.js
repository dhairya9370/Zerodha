const {model}=require('mongoose');
const {PositionSchema}=require('../schemas/Position');
const Position=new model('position',PositionSchema);
module.exports={Position};