const { google } = require('googleapis');

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirect: process.env.GOOGLE_REDIRECT_URL,
};

const oauth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect,
);

const defaultScope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: defaultScope,
  prompt: 'select_account',
  hd: process.env.DOMAIN,
});

function getGooglePlusApi(auth) {
  return google.plus({ version: 'v1', auth });
}

// Extract the email and id of the google account from the "code" parameter.
async function oAuthByTokens(tokens) {
  try {
    // add the tokens to the google api so we have access to the account
    oauth2Client.setCredentials(tokens);

    // connect to google plus - need this to get the user's email
    const plus = getGooglePlusApi(oauth2Client);
    const me = await plus.people.get({ userId: 'me' });

    // get the google id and email
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;

    if (!userGoogleEmail.endsWith(process.env.DOMAIN)) return { error: 'Not allowed domain' };
    // return so we can login or sign up the user
    return {
      id: userGoogleId,
      email: userGoogleEmail,
      tokens, // you can save it to the user, to get their details without login them again
    };
  } catch (e) {
    return { error: e.message };
  }
}

async function getGoogleAccountFromCode(code) {
  // get the auth "tokens" from the request
  const data = await oauth2Client.getToken(code);
  const { tokens } = data;

  const userData = await oAuthByTokens(tokens);
  return userData;
}


module.exports = {
  url,
  getGoogleAccountFromCode,
  oAuthByTokens,
};
