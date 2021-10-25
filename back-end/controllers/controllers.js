const db = require("../model/database");

const addPreference = async (req, res) => {
  try {
    let preferences = await db.Preferences.create(req.body);
    res.json({ status: true, message: "Saved successfully !!!" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: false, message: error.message });
  }
};

module.exports.addPreference = addPreference