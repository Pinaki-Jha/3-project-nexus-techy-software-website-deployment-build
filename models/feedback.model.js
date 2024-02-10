const mongoose = require("mongoose");
const Feedback = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    feedback:{type:String},
})

const fbmodel = mongoose.model("FeedBackData",Feedback)

module.exports = fbmodel