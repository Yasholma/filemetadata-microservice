"use strict";

var express = require("express");
var cors = require("cors");
const fileUpload = require("express-fileupload");

// require and use "multer"...

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.use(fileUpload());

app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", function (req, res) {
    const fileToUpload = req.files.upfile;
    const { name, mimetype: type, size } = fileToUpload;
    return res.json({ name, type, size });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Node.js listening ...");
});
