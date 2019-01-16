const jwt = require('jsonwebtoken');
const nanoid = require('nanoid/async');

const models = require('../models');

const { User } = models;

async function authenticate(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user && user.comparePassword(password)) {
      req.user = user;
      next();
      return;
    }

    res.status(401).json({ error: 'Wrong email or password' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function generateAccessToken(req, res, next) {
  if (!req.user) {
    next();
    return;
  }

  const payload = { id: req.user.id, email: req.user.email };
  const secret = process.env.JWT_SECRET;
  const data = { expiresIn: process.env.JWT_EXPIRATION };
  const refreshToken = await nanoid();

  req.token = jwt.sign(payload, secret, data);

  // Get new refresh token every time new access token is generated
  try {
    await req.user.update({ refresh_token: refreshToken });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

  next();
}

async function refreshAccessToken(req, res, next) {
  try {
    req.user = await User.findOne({
      where: {
        email: req.body.email,
        refresh_token: req.body.refresh_token,
      },
    });
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid email or refresh_token' });
  }
}

function returnAccessToken({ user, token }, res) {
  if (user && token) {
    res.status(201).json({ token, refresh_token: user.refresh_token });
    return;
  }

  res.status(401).json({ error: 'Unauthorized' });
}

module.exports = {
  authenticate,
  generateAccessToken,
  refreshAccessToken,
  returnAccessToken,
};
