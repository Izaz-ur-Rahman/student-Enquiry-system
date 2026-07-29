let express = require("express");
let mongoose = require('mongoose');

const enquiryRouter = require("./App/Routes/web/enquiryRoutes");
require('dotenv').config();
let app = express();
app.use(express.json());


// Routes
app.use("/api/website/enquiry/",enquiryRouter);
app.get("/", (req, res) => {
    res.send("Server is working");
});
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("db connected successfully")
    app.listen(process.env.PORT || 3000,()=>{
    console.log("server are running on this port: ",process.env.PORT)

    });
}).catch((err)=>{
    console.log(err);
})