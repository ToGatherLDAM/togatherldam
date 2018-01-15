const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

const config = {
  host: 'localhost',
  port: 5432,
  user: 'lara',
  password: '',
  database: 'togather_db'
}

const db = pgp(config);


const getAllEvents = (req, res) => {
  return db.any('select * from events');
};

const getSingleEvent = (req, res, eventId) => {
  return db.one('select * from events where id = $1', [true]);
};

const createEvent = (params) => {
  console.log('MY PARAMS', params);
  db.none('insert into events (name, description) values($1, $2)', params)
    .then(() => {
      console.log('Success');
    })
    .catch(error => {
      console.log(error);
    })
};

// , location, event_date, start_time, end_time, price, nameYelp, location, image_url
//$3, $4, $5, $6, $7, $8, $9, $10

// const updateEvent = (req, res) => {
//   return db.none('update events set name=$1, description=$2, date=$3, time=$4',
//   [req.body.name, req.body.description, req.body.date, req.body.time])
  
// };


const removeEvent = (req, res) => {
  return db.result('delete from events where id = $1', false);
};







module.exports = {
  getAllEvents: getAllEvents,
  getSingleEvent: getSingleEvent,
  createEvent: createEvent,
  removeEvent: removeEvent,
};