const { Router } = require("express");
const router = Router();
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { addUser, getUser,deleteUser } = require("../controllers/users");
const { userValidators } = require("../validators/user");

router.post("/add-user", userValidators, validationMiddleware, addUser);
router.get("/get-users", getUser);
router.delete("/delete-user",validationMiddleware,deleteUser)

module.exports = router;
