const Thought = require("../models/Thought")

module.exports ={
   getAllThoughts(req,res){
    Thought.find()
    .then((thoughts)=>res.json(thoughts))
    .catch((err)=>res.status(500).json(err));
},
    getOneThoughtId(req,res){
    Thought.findOne({_id:req.params.thoughtId})
    .then((thought)=> !thought
    ?res.status(404).json({message:"No thought read with given Id"})
    :res.json(thought))
    .catch((err)=>res.status(500).json(err))
},
    generateNewThought(req,res){  
    Thought.create(req.body)
    .then((thought)=>res.json(thought))
    .catch((err)=>res.status(500).json(err));
},
   modifyThoughtId(req,res){
    Thought.findByIdAndUpdate(
        {_id:req.params.thoughtId},
        {$set:req.body})
    .then((thought)=>
    !thought
    ?res.status(404).json({message:"No thought read with given Id"})
    :res.json(thought))
    .catch((err)=>res.status(500).json(err));
},
    deleteThoughtId(req,res){
        Thought.findOneAndDelete({_id:req.params.thoughtId})
        .then(()=>res.json({message:"Thought and all applicable attributes deleted"}))
        .catch((err)=>res.status(500).json(err));
},
    generateReaction(req,res){
        Reaction.findByIdAndUpdate(
            {_id:req.params.thoughtId},
            {$push:{reaction:req.body}},
            {new:true})
        .then((thoughtInfo)=>{
            if(!thoughtInfo){
                res.status(404).json({message:"No thought found with given Id"})
            }else{
                res.json(thoughtInfo)
            }})
            .catch((err)=>{console.error(err)});
},
    deleteReactionId(req,res){
        Reaction.findOneAndDelete({_id:req.params.reactionId})
        .then(()=>res.json({message:"Reaction and all applicable attributes deleted"}))
        .catch((err)=>res.status(500).json(err));
    }
}