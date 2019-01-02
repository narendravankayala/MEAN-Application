const mongoose = require("mongoose");


const ContactSchmea = mongoose.Schema({
    firstName:{
        type: String,
        required : true
    },
    lastName:{
        type :String,
        required: true
    },
    mobileNumber:{

        type : String,
        required : true
    }
});

const Contact = module.exports = mongoose.model('Contact',ContactSchmea);