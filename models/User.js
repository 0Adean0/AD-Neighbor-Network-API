const {Schema,model} =require("mongoose")
const userSchema =newSchema({
    membertag:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    thoughts:[{
        type:Schema.Types.ObjectId,
        ref:"thought"
    }],
    neighbors:[{
        type:Schema.Types.ObjectId,
        ref:"user"
    }],
    },{
        toJSON:{
            virtuals:true,
            getters:true
        },
});
const User = model("user", userSchema)
const seedUser = async() => {
    await User.deleteMany({})
    await User.insertMany([
       {membertag:"Papadopalis Bonyon", email: "pdb@gmail.com"},
       {membertag:"Mallo Demarco", email: "malloman@gmail.com"},
       {membertag:"Bowser T", email: "btizzy@gmail.com"},
       {membertag:"Howdy McHowdyface", email: "Howdyx2@gmail.com"}
    ]);
};
module.exports = User
seedUser();