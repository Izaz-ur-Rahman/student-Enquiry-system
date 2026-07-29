let express = require("express");
const { enquiryInsert } = require("../../Controllers/web/enquiryController");

let enquiryRouter = express.Router();


enquiryRouter.post("/insert",enquiryInsert)
module.exports = enquiryRouter
