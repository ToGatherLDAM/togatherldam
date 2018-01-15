const router = require('express').Router();

const db = require('../database');
const controller = require('./controller');

router.get('/myevents', controller.getAllEvents);
router.post('/', controller.createEvent);
// router.post('/search', controller.searchForNew);


// router.get('/:id', db.getSingleEvent);
// router.post('/', db.createEvent);
// router.put('/events/:id', db.updateEvent);
// router.delete('/events/:id', db.removeEvent);

module.exports = router;
