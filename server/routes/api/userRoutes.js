const {
  getSingleUser,
  createUser,
  login,
} = require("../../controllers/userController");

const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/me").get(authMiddleware, getSingleUser);
module.exports = router;
