const express = require('express');
const routes = require('./config/routes');
require('./config/database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000);