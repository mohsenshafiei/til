const express = require("express");
const controller = require("../controllers/index");

const router = express.Router();

router.get("/", controller.smokeTest);
router.post("/user/new", controller.validateInput, controller.addUser);
router.get("/user/:userId", controller.getUser);
router.delete(
  "/user/:userId",
  controller.checkUserExists,
  controller.deleteUser
);
router.put(
  "/user/:userId",
  controller.validateInput,
  controller.checkUserExists,
  controller.updateUser
);
router.get("/users", controller.getUsers);

module.exports = router;
