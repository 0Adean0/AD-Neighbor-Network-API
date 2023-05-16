const {Schema,model} = require("mongoose")
const Reaction = require("./Reaction")
const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        minLength:1,
        maxLength:200
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    membertag:{
        type: String,
        required:true
    },
    reaction:[Reaction],
    },
    { 
    toJSON:{
        virtuals:true,
        getters:true
    },
});
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reaction.length;
});

const Thought = model("Thought", thoughtSchema)
const seedThought = async() => {
    await Thought.deleteMany({})
    await Thought.create([
        {thoughtText: "People are just bald upright apes with nicer teeth.", membertag:"Papadopalis Bonyon"},
        {thoughtText: "Chess is just civilized warfare to be gambled on", membertag:"Mallo Demarco"},
        {thoughtText: "All plumbers should be required to look like the Mario brothers", membertag:"Bowser T"},
        {thoughtText: "Texas probably has more livestock than people", membertag:"Howdy McHowdyface"}
    ])
};
module.exports = Thought
seedThought();