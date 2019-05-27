const express = require('express');

const checkJWT = require('../middlewares/checkJWT');
const errorHandler = require('../middlewares/errorHandler');

const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();

/**
* @swagger
* /api/user/:
*   get:
*     tags:
*       - Users
*     name: Get users
*     responses:
*       200:
*         description: Without message
*         schema:
*           type: array
*           items:
*             type: object
*             properties:
*               name:
*                 type: string
*               email:
*                 type: string
*       500:
*         schema:
*           type: object
*           properties:
*             error:
*               type: string
*   post:
*     tags:
*       - Users
*     name: Create user
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
*         schema:
*           type: object
*           properties:
*             name:
*               type: string
*             email:
*               type: string
*       403:
*         description: Password field must not be blank
*       409:
*         description: This email already exists
*       500:
*         schema:
*           type: object
*           properties:
*             error:
*               type: string
*/

router.route('/')
  .get(checkJWT(), userCtrl.list, errorHandler) // protected
  .post(
    userCtrl.create,
    authCtrl.generateAccessToken,
    authCtrl.returnAccessData,
  ); // unprotected

router.route('/:userId')
  .get(checkJWT(), userCtrl.byUserId, errorHandler); // protected

module.exports = router;
