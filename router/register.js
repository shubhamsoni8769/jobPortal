const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const mongoUrl = require('../config/key').mongoUrl
const User = require('../models/connection')


console.log("hi");
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true} )

router.post('/',(req, res, next)=>{
    console.log('register', req.body);
    const user = new User({
        name:req.body.name,
        phoneNo: req.body.phoneNo
    });
    console.log(user);
    user.save().then(data =>{
        console.log("data Save",data);
    })

    
})
module.exports = router