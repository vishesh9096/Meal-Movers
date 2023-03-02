const mongoose = require('mongoose')

const feedbackschema = new mongoose.Schema({
    Pname:{
        type: String,
        

    },
    Fname:{
        type: String,
        required: [true,"Food must have a name"],
    },
    
    Uname:{
        type:String,

    },
    Rating:{
        type:Number,
        default:1,
    },
    myDate:{
        type:String,
        
    },
    desc:{
        type:String,
    }
})

const Feedback = mongoose.model('feedback',feedbackschema);

module.exports = Feedback;