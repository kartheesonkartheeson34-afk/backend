const express = require("express");
const router = express.Router();
const { authmiddleware, authorizeRole, checkSelfOrRole } = require("../middleware/authMiddleware");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", authmiddleware, authorizeRole("admin"), createUser);
router.put("/:id", authmiddleware, checkSelfOrRole("admin"), updateUser);
router.delete("/:id", authmiddleware, checkSelfOrRole(), deleteUser);
// router.get("/", authmiddleware, getUsers);
// router.get("/:id", getUserById);
// router.post("/", authmiddleware, createUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;