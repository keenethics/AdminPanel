const express = require('express');

const errorHandler = require('../middlewares/errorHandler');

const dataCtrl = require('../controllers/data.controller');

const router = express.Router();


router.route('/getAuthUrl')
  .post(
    errorHandler,
    dataCtrl.returnGoogleAuthUrl,
  );


module.exports = router;
