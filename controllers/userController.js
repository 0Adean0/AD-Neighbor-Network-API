const User = require("../models/User")

module.exports={
    getAllUsers(req,res){
        User.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
    },
    getOneUserId(req,res){
        User.findOne({_id: req.params.userId})
        .then((user)=>
        !user
        ?res.status(404).json({message: "No user found with given Id" })
        :res.json(user))
        .catch((err)=>res.status(500).json(err));
    },
    generateUser(req,res){
        User.create(req.body)
        .then((user)=>res.json(user))
        .catch((err)=>res.status(500).json(err));
    },
    modifyUserId(req,res){
    User.findByIdAndUpdate(
        {_id:req.params.userId},
        {$set:req.body})
        .then((user)=>
        !user
        ?res.status(404).json({message:"No user found with given Id"})
        :res.json(user))
        .catch((err)=>res.status(500).json(err));
    },
    deleteUserId(req,res){
        User.findOneAndDelete({_id:req.params.userId})
        .then(()=>res.json({message:"User and all applicable attrinbutes deleted"}))
        .catch((err)=> res.status(500).json(err));
    },
    generateNeighbor(req,res){
        User.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$push:{neighbor:neigbor._id}},
            {new:true})
            .then(()=>res.json({message:"Neighbor successfully added"}))
            .catch((err)=>res.status(500).json(err));
        }
    }
