let express = require("express");
const { enquiryInsert ,EnquiryList} = require("../../Controllers/web/enquiryController");

let enquiryRouter = express.Router();


enquiryRouter.post("/insert",enquiryInsert)
enquiryRouter.get("/list",EnquiryList);
module.exports = enquiryRouter
