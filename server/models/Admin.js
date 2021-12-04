const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    FirstName: {
        type: String,
    },
    MiddleName:{
        type: String,
    },
    LastName:{
        type: String,
    },
    phone:{
        type: String,
    },
    gender:{
        type: String,
    },
})


module.exports = Admin = mongoose.model('admin',AdminSchema)