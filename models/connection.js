const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name:String,
    phoneNo: Number
})

module.exports = mongoose.model('userSchema' , UserSchema)