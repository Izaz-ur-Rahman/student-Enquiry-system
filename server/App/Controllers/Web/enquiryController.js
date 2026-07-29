const enquiryModel = require("../../Models/enquiry.model");

let enquiryInsert = (req,res)=>{
    let {sName,sEmail,sPhone,sMessage} = req.body;
    let enquiry = new enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message: sMessage
        
    })
    enquiry.save().then(()=>{
        res.send({status:"success",message:"Enquiry inserted successfully"});

    }).catch((err)=>{
        res.send({status:"failed",message:"Error why saving Enquiry",err});
    })
}

module.exports = {enquiryInsert}