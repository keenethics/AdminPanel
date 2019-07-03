const express = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const dataRoutes = require('./data.route');

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /user
router.use('/user', userRoutes);

// mount data routes at /data
router.use('/data', dataRoutes);

module.exports = router;
