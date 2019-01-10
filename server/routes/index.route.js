const express = require('express');
const authRoutes = require('./auth.route');

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

module.exports = router;
