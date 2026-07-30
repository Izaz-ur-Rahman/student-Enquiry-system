let express = require("express");
const { enquiryInsert ,EnquiryList,EnquiryDelete} = require("../../Controllers/web/enquiryController");

let enquiryRouter = express.Router();


enquiryRouter.post("/insert",enquiryInsert)
enquiryRouter.get("/list",EnquiryList);
enquiryRouter.delete("/delete/:id",EnquiryDelete);
module.exports = enquiryRouter
