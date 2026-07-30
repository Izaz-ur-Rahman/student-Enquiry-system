// const enquiryModel = require("../../Models/enquiry.model");

// let enquiryInsert = (req,res)=>{
//     let {sName,sEmail,sPhone,sMessage} = req.body;
//     let enquiry = new enquiryModel({
//         name:sName,
//         email:sEmail,
//         phone:sPhone,
//         message: sMessage
        
//     })
//     enquiry.save().then(()=>{
//         res.send({status:"success",message:"Enquiry inserted successfully"});

//     }).catch((err)=>{
//         res.send({status:"failed",message:"Error why saving Enquiry",err});
//     })
// }

// module.exports = {enquiryInsert}

const enquiryModel = require("../../Models/enquiry.model");

const enquiryInsert = (req, res) => {


    const { name, email, phone, message } = req.body;

   

    const enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    });

    enquiry.save()
        .then(() => {
            res.send({
                status: "success",
                message: "Enquiry inserted successfully"
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                status: "failed",
                message: err.message
            });
        });
};

let EnquiryList = async (req,res)=>{
let enquiry = await enquiryModel.find();
res.send({status:"success",Enquiry:enquiry})
}
module.exports = { enquiryInsert ,EnquiryList};