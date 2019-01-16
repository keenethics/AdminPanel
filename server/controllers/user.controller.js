const models = require('../models');

const { User } = models;

async function create(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password,
    }, {
      attributes: { exclude: ['password', 'refresh_token'] },
    });

    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function list(req, res) {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password', 'refresh_token'] },
    });

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  create,
  list,
};
