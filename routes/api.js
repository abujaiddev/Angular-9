const express = require("express");
const vechicleController = require("../contoroller/vechicleController");
const memberController = require("../contoroller/memberController");
const router = express.Router();

// Vechicle
router.post("/create", vechicleController.vechicleCreate);
router.post("/member", memberController.memberCreate);

module.exports = router;
