const Member = require("../models/member");

exports.memberCreate = async (req, res) => {
  try {
    const member = await new Member({
      ...req.body
    });
    member.save();
    res.json(member);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
