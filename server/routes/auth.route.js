const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login')
  .post(
    authCtrl.authenticate,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessToken,
  );

router.route('/refresh')
  .post(
    authCtrl.refreshAccessToken,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessToken,
  );

module.exports = router;
