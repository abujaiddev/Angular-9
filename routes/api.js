const express = require("express");
const vechicleController = require("../contoroller/vechicleController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        // cb(null, Date.now() + "-" + file.originalname);
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});
// Vechicle
router.post("/create", upload.single('imageName'), vechicleController.vechicleCreate);
router.get("/vehicles", vechicleController.vehicles);
router.post("/delete", vechicleController.vechicleDelete);

module.exports = router;
