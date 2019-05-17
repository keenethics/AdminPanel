const express = require('express');

const errorHandler = require('../middlewares/errorHandler');

const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login')
  .post(
    errorHandler,
    authCtrl.authenticate,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessData,
  );

router.route('/refresh')
  .post(
    errorHandler,
    authCtrl.refreshAccessToken,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessData,
  );

module.exports = router;
