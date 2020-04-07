require("../model/model");
const controller = require('../controller/controller');

const express = require('express');
const router = express.Router();

router.get("/ping", controller.pingHandler);
router.get("/:userId", controller.getHandler);
router.post("/", controller.insertHandler)

module.exports = router;