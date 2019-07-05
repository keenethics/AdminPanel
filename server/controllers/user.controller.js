const models = require('../models');

const { User } = models;
const googleAuthHelper = require('../googleAuth/googleAuth');

async function create(req, res, next) {
  const { email, password } = req.body;

  if (!password) {
    res.status(403).json({ error: 'Password field must not be blank' });
    return;
  }

  try {
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({ error: 'This email already exists' });
      return;
    }

    const user = await User.create({
      email,
      password,
    });

    if (user) {
      req.user = user;

      next();
      return;
    }

    throw new Error('User not created');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function byUserId(req, res) {
  try {
    const { params: { userId } } = req;

    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: User.privateFields },
      });

      if (!user) res.status(401).end();

      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function list(req, res) {
  try {
    const users = await User.findAll({
      attributes: { exclude: User.privateFields },
    });

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function oAuthByToken(req, res) {
  try {
    const { params: { tokens } } = req;
    const { accessToken, idToken } = JSON.parse(tokens);
    const data = await googleAuthHelper.oAuthByTokens({
      access_token: accessToken,
      id_token: idToken,
    });
    const { email } = data;
    if (email) {
      const user = await User.findOne({
        where: { email },
        attributes: { exclude: User.privateFields },
      });

      if (!user) res.status(401).end();

      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  create,
  byUserId,
  list,
  oAuthByToken,
};
