const mongoose = require("mongoose");
const Bookmeet = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
})

const bmmodel = mongoose.model("BookMeetData",Bookmeet)

module.exports = bmmodel