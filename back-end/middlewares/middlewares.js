const { Preferences } = require("../model/database");

// check if the name is already existed
const isUnique = async (req, res, next) => {
  let row = await Preferences.findOne({ where: { name: req.body.name } });
  let usernameRegex = /^[a-zA-Z]+$/;
  if (
    !usernameRegex.test(req.body.name) ||
    req.body.name.length < 4 ||
    req.body.name.length > 8
  ) {
    res.json({ status: false, message: "Name is invalid !!" });
    return;
  } else if (row) {
    res.json({ status: false, message: "Name already exist !!" });
    return;
  }
  next();
};

module.exports.isUnique = isUnique;
