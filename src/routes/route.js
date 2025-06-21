const express = require('express');
const route = express.Router();

const mainController = require("../controller/mainController");

route.get("/",mainController.index)
route.get("/home",mainController.home)
route.get("/result",mainController.result)


route.all("/*", function (req, res) {
    res.status(400).send({status: false,message: "The api you request is not available"})
})
module.exports = route;
