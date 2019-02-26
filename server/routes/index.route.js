const express = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /user
router.use('/user', userRoutes);

module.exports = router;
