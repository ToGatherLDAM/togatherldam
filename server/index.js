const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const router = express.Router();
// const axios = require('axios');

// const router = require('./routes.js');
// const db = require('../database');

const app = express();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports.app = app;
