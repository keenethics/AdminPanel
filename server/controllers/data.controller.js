const googleAuthHelper = require('../googleAuth/googleAuth');

function returnGoogleAuthUrl(req, res) {
  const authUrl = googleAuthHelper.url;
  if (authUrl) {
    res.status(201).json({
      authUrl,
    });

    return;
  }

  res.status(401).json({ error: 'Can\'t find url.' });
}

module.exports = {
  returnGoogleAuthUrl,
};
