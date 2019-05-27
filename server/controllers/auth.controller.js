const jwt = require('jsonwebtoken');

const models = require('../models');

const { User } = models;

async function authenticate(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user && await user.comparePassword(password)) {
      req.user = user;
      next();

      return;
    }

    res.status(401).json({ error: 'Wrong email or password' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

function generateAccessToken(req, res, next) {
  if (!req.user) {
    next();
    return;
  }

  const payload = { id: req.user.id, email: req.user.email };
  const secret = process.env.JWT_SECRET;
  const data = { expiresIn: process.env.JWT_EXPIRATION };

  req.token = jwt.sign(payload, secret, data);

  next();
}

async function refreshAccessToken(req, res, next) {
  try {
    req.user = await User.findOne({
      where: {
        email: req.body.email,
        refreshToken: req.body.refreshToken,
      },
    });
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid email or refreshToken' });
  }
}

function returnAccessData({ user, token }, res) {
  if (user && token) {
    res.status(201).json({
      user,
      token,
    });

    return;
  }

  res.status(401).json({ error: 'Unauthorized' });
}

module.exports = {
  authenticate,
  generateAccessToken,
  refreshAccessToken,
  returnAccessData,
};
