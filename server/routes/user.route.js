const express = require('express');

const checkJWT = require('../middlewares/checkJWT');
const errorHandler = require('../middlewares/errorHandler');

const userCtrl = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
  .get(checkJWT(), userCtrl.list, errorHandler) // protected
  .post(userCtrl.create); // unprotected

router.route('/:userId')
  .get(checkJWT(), userCtrl.byUserId, errorHandler); // protected

module.exports = router;
