import axios from 'axios';

const db = require('../database');

const get = (req, res) => {
  get(db.getAllEvents)
    
    .then((results) => {
      res.json(resuts);
    })
    .catch((response) => {
      res.status(500).json('Data not found');
    });
  
};


module.exports = {
  get: get,
};