const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

/**
* @swagger
* /api/auth/login:
*   post:
*     tags:
*       - Auth
*     name: Login
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - email
*           - password
*     responses:
*       201:
*         description: Without message
*       401:
*         description: Wrong email or password | Unauthorized
*       500:
*         schema:
*           type: object
*           properties:
*             error:
*               type: string
*/

router.route('/login')
  .post(
    authCtrl.authenticate,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessToken,
  );

/**
* @swagger
* /api/auth/refresh:
*   post:
*     tags:
*       - Auth
*     name: Refresh
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             email:
*               type: string
*             refresh_token:
*               type: string
*         required:
*           - email
*           - refresh_token
*     responses:
*       201:
*         description: User found and logged in successfully
*       401:
*         description: Invalid email or refresh_token | Unauthorized
*/

router.route('/refresh')
  .post(
    authCtrl.refreshAccessToken,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessToken,
  );

module.exports = router;
