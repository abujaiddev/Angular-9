const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vechicleSchema = new Schema(
  {
    nickName: {
      type: String
    },
    model: {
      type: String
    },
    year: {
      type: String
    },
    milage: {
      type: String
    },
    nextServiceIn: {
      type: String
    },
    issues: {
      type: String
    },
    addtional_features: [
      {
        charge: {
          type: String
        },
        derving_rage: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vechile", vechicleSchema);
