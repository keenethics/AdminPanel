module.exports = {
  server: [
    {
      command: 'WEB_PORT=3006 APP_PORT=3005 webpack-dev-server --mode development',
      port: 3006,
      debug: true,
      launchTimeout: 10000,
    },
    {
      command: 'APP_PORT=3005 nodemon --watch server ./server/index.js',
      port: 3005,
      debug: true,
      launchTimeout: 10000,
    },
  ],
};
