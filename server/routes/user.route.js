const express = require('express');

const checkJWT = require('../middlewares/checkJWT');
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
  .get(checkJWT(), userCtrl.list) // protected
  .post(userCtrl.create); // unprotected

module.exports = router;
