const db = require("../db");

// get users;
exports.getUser = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM users");
  try {
    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

// add user;
exports.addUser = async (req, res) => {
  const { user_name } = req.body;
  try {
    await db.query("INSERT INTO users (user_name) VALUES($1)", [user_name]);

    return res.status(201).json({
      success: true,
      message: "The player was succefully added",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

// delete user;
exports.deleteUser = async (req, res) => {
  const  user_name = req.body;

  try {
    await db.query("DELETE FROM users WHERE user_name = $1", [user_name]);
    console.log('tetst', req);

    return res.status(201).json({
      success: true,
      message: "The player was succefully DELETED",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
