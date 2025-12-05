const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ username, email, password: hashed });
    await user.save();

    // Send back data
    res.json({ username, email, password: hashed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
