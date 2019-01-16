const express = require('express');

const checkJWT = require('../middlewares/checkJWT');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
  .get(checkJWT(), userCtrl.list) // protected
  .post(userCtrl.create); // unprotected

module.exports = router;
