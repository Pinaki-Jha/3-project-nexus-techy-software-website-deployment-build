const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bookmeet = require("./models/bookmeet.model")
const feedback = require("./models/feedback.model")

require("dotenv").config()

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.post('/api/bookmeet', async(req,res)=>{
    console.log("registering meeting...")
    try{await bookmeet.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    })
    res.send({status:"ok", message:"Meeting Registered Successfully. We'll reach out shortly."})
}
    catch(err){
        res.send({status:"error",message:"An error has occurred. Please try again later."})
    }

})

app.post('/api/feedback',async(req,res)=>{
    console.log("registering feedback data...")
    try{await feedback.create({
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback,
    })
    res.send({status:"ok", message:"Your feedback has been noted. Thank you for your valuable inputs!"})
}
    catch(err){
        res.send({status:"error",message:"An error has occurred. Please try again later."})
    }

})

app.use('*',  (req, res) => {
    res.sendFile((__dirname+ '/dist/index.html'));
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started...")
})