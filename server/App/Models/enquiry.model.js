let mongoose = require("mongoose");
let schema = mongoose.schema;
let enquirySchema = new schema({
    name:{
        types:String,
        require : true
    },
     email:{
        types:String,
        require : true,
        unique: true
    }
    ,
     phone:{
        types:String,
        require : true
    },

     message:{
        types:String,
        require : true
    }
});
let enquiryModel = mongoose.model('enquiry',enquirySchema);
module.exports = enquiryModel;
