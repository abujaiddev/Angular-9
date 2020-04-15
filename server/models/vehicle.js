const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vechicleSchema = new Schema(
  {
    vin: {
      type: String,
      default: 'KBILLIG2020SK3386'
    },
    modelYear: {
      type: String
    },
    vehicleModelName: {
      type: String
    },
    vehicleNickName: {
      type: String
    },
    ignitionType: {
      type: String,
      default: 'fuel'
    },
    vehicleCategory: {
      type: String,
      default: 'embedded'
    },
    mileage: {
      type: String
    },
    nextServiceMiles: {
      type: String
    },
    diagnosticsIssues: {
      type: Number
    },
    chargeLevelPct: {
      type: Number,
      default: 35
    },
    batteryStatus: {
      type: String,
      default: null
    },
    drivingRangeMiles: {
      type: Number
    },
    status: {
      type: String,
      default: 'Not Activated'
    },
    imageName: {
      type: String
    },
    lastRefreshed: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vechile", vechicleSchema);
