const Vehicle = require("../models/vehicle");

exports.vechicleCreate = async (req, res) => {
  // return console.log(req.file)
  try {
    const vehicle = await new Vehicle({
      ...req.body,
      imageName: req.file.filename
    });
    vehicle.save();
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

exports.vehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
  } catch (err) {
    res.status(500).json({ msg: 'server error' })
  }
}

exports.vechicleDelete = async (req, res) => {
  // return console.log('========', req.body)

  try {

    const vehicle = await Vehicle.deleteMany({ _id: { $in: req.body } })
    await res.json(vehicle)
    res.json({ msg: 'vehicle deleted', vehicle })

  } catch (error) {
    res.status(500).json({ msg: 'server error' })
  }
}
