const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema ({
    id:{
        type:String,
        unique:true,
    },
    logo:{
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    type:{
        type:String,
        required:true,
    },
    jobTitle:{
        type: String,
        required: true,
    },
    jobDescription:{
        type: String,
    },
    jobResponsibilities:{
        type:String,
    },
    pay:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Jobs", jobSchema);