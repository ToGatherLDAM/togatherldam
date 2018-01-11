const express = require('express');
const router = require('express').Router();

const db = require('../database/index.js');

router.get('/events', db.getAllEvents);
router.get('/events/:id', db.getSingleEvent);
router.post('/events', db.createEvent);
router.put('/events/:id', db.updateEvent);
router.delete('/events/:id', db.removeEvent);

module.exports = router;
