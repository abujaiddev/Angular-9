const Vechicle = require("../models/vehicle");

exports.vechicleCreate = async (req, res) => {
  try {
    const vechicle = await new Vechicle({
      ...req.body,
      addtional_features: [...req.body.addtional_features]
    });
    vechicle.save();
    res.json(vechicle);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
