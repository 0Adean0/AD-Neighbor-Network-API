const User = require("../models/User")

model.exports={
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
    modifyUserId(req,res)
    }
