const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    Pname:{
        type: String,
        required: [true,"Resturant must have a name"],

    },
    Fname:{
        type: String,
        required: [true,"Food must have a name"],
    },
    
    Quantity:{
        type:Number,
        default:1,
    },
    Expiry:{
        type:Number,
        default:1,
    },
    Category:{
        type:String,
    },
    Lat:{
        type:Number,
    },
    Long:{
        type:Number,
    },
    Age:{
        type:Number,
        default:1.0,
    },
    Ilink:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/2515/2515263.png"
    },
    price: {
        type:Number,
    },
    myDate:{
        type:String,
        
    },
    unit:{
        type:String,
    }
})

const Tour = mongoose.model('Tour',tourSchema);

module.exports = Tour;