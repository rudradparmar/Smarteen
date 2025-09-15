const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware"); // ✅ fixed path

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Example protected route
router.get("/profile", protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;
