const {
  getSingleUser,
  createUser,
  login,
  finAll
} = require("../../controllers/userController");

const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
router.route("/").post(createUser).get(finAll)
router.route("/login").post(login);
router.route("/me").get(authMiddleware, getSingleUser);
module.exports = router;
