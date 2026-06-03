const {model}=require('mongoose');
const {UserSchema}=require("../schemas/User");
const User=new model('user',UserSchema);
module.exports={User};
