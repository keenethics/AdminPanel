module.exports = (err, req, res, next) => {
  if (err && err.status) {
    res.status(err.status).end();

    return;
  }
  next();
};
