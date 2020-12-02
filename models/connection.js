const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name:String,
    email:String,
    phoneNo: Number,
    location:String,
    JobFunction:String,
    ExpectedCTC:String,
    experienced:Boolean,
    noticePeriod:String,
    resume:{data: Buffer, contentType: String}
})

module.exports = mongoose.model('userSchema' , UserSchema)