const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const routes = require('./routes/index.route');

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('dist'));

app.use('/api', routes);

const port = process.env.APP_PORT || 3001;
const host = process.env.APP_HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
