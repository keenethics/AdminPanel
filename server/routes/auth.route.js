const express = require('express');
// import * as authCtrl from '../controllers/auth.controller';

const router = express.Router();

router.route('/login').get((req, res) => {
  res.end('{ "a": "test" }');
  // authCtrl.login(req, res)
});

module.exports = router;
