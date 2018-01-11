const pg = require('pg');
const promise = require('bluebird');
const express = require('express');
const path = require('path');

const options = {
  promiseLib: promise,
};
const pgp = require('pg-promise')(options);

const connectionString = 'postgres://localhost:3000/events';

const db = pgp(connectionString);

db.connect();


const getAllEvents = (req, res, next) => {
  db.any('select * from Events')
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch((err) => {
      return next(err);
    });
};

const getSingleEvent = (req, res, next) => {
  const eventId = parseInt(req.params.id);
  db.one('select * from Events where id = $1', eventId)
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch((err) => {
      return next(err);
    });
};

const createEvent = (req, res, next) => {
  // req.body.date = parseInt(req.body.date);
  // req.body.time = parseInt(req.body.time);
  db.none('insert into Events (name, description, date, time) values(${name}, ${description}, ${date}, ${time})', req.body)
    .then(() => {
      res.status(200)
        .json('Success');
    })
    .catch((err) => {
      return next(err);
    });
};

const updateEvent = (req, res, next) => {
  db.none('update events set name=$1, description=$2, date=$3, time=$4',
  [req.body.name, req.body.description, req.body.date, req.body.time])
    .then(() => {
      res.status(200)
        .json('Success');
    })
    .catch((err) => {
      return next(err);
    });
};


const removeEvent = (req, res, next) => {
  const eventId = req.params.id;
  db.result('delete from Events where id = $1', eventId)
    .then((result) => {
      res.status(200)
        .json('Success');
    })
    .catch((err) => {
      return next(err);
    });
};





module.exports = {
  getAllEvents: getAllEvents,
  getSingleEvent: getSingleEvent,
  createEvent: createEvent,
  updateEvent: updateEvent,
  removeEvent: removeEvent,
};