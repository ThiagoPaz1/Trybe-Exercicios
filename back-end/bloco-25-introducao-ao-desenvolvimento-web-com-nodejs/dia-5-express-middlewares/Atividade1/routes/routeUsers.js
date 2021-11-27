const express = require('express');
const router = express.Router();
const register = require('../middlewares/middlewaresUser');

router.post('/register', register.username, register.password, register.email,
  (_req, res) => {
    return res.status(201).json({ message: "user created" });
});

module.exports = router;