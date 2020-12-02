const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name:String,
    email:String,
    phoneNo: Number,
    location:String,
    isFresher:Boolean,
    availability:String,
    
})

module.exports = mongoose.model('userSchema' , UserSchema)