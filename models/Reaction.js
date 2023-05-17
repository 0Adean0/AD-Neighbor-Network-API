const {Schema, Types} = require("mongoose")
const reactionSchema = new Schema({
   reactionId:{
    type:Schema.Types.ObjectId,
    default:() =>new Types.ObjectId(),
   },
   reactionBody:{
    type:String,
    required:true,
   },
   createdAt:{
    type:Date,
    defaut:Date.now
   },
   membertag:{
    type:String,
    required:true
   },
},
   {
   toJSON:{
    getters:true
   }
});
module.exports = reactionSchema;