const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    MemberName: {
      type: String
    },
    MemberBio: {
      type: String
    },
    MemberAge: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
