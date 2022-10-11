const { check } = require("express-validator");
const db = require("../db");

// user name length;
const userValidatorLenght = check("user_name")
  .isLength({ min: 3, max: 30 })
  .withMessage("Player name has to be between 6 and 30 characters.");

// check if user name exists;
const userExists = check("user_name").custom(async (value)=>{
  const { rows } = await db.query("SELECT * from users WHERE user_name = $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("Player name already exists.");
  }
})
module.exports = {
  userValidators: [userValidatorLenght ,userExists],
};
