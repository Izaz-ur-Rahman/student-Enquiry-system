let express = require("express");
let mongoose = require('mongoose');
require('dotenv').config();
let app = express();

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("db connected successfully")
    app.listen(process.env.PORT || 3000,()=>{
    console.log("server are running on this port: ",process.env.PORT)

    });
}).catch((err)=>{
    console.log(err);
})