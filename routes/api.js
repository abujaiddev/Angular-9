const express = require("express");
const vechicleController = require("../contoroller/vechicleController");
const router = express.Router();

// Vechicle
router.post("/create", vechicleController.vechicleCreate);

module.exports = router;
