const models = require('../models');

const { User } = models;

async function create(req, res) {
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

    res.status(201).json(user);
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

module.exports = {
  create,
  list,
};
