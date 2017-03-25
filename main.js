const app = require('./app/');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./db');

db.seed()
  .then(() => {
    app.use('/vendor', express.static('node_modules'));
    app.use('/public', express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/', (req, res, next) => {
      res.sendFile(path.join(__dirname, '../browser/index.html'));
    });
    app.use('/api', require('./routes'));
  });
