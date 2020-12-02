const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
// const mongoUrl = require('../config/key').mongoUrl
const mongoUrl = 'mongodb+srv://shubham8769:12345@cluster0.7wzyw.mongodb.net/<dbname>?retryWrites=true&w=majority'
const User = require('../models/connection')


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/', (req, res, next) => {
    const user = new User({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        email: req.body.email,
        location: req.body.location,
        isFresher: req.body.isFresher,
        availability: req.body.availability,
    });

    //check for email
    User.find({ email: user.email }).then((data) => {
        console.log("hi", data);
        if (data.length == 0) {
            user.save().then(data => {
                console.log("data Save", data);
            })
        }else{
            res.send("email already exist")
        }
    })
})
module.exports = router