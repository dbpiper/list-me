const express = require('express');
const router = express.Router();

// get the list of items from the db
router.get('/items', function(req, res) {
  res.send({type: 'GET'})
});

// add a new item to the db
router.post('/items', function(req, res) {
  res.send({type: 'POST'})
});

// update an item in the db
router.put('/items/:id', function(req, res) {
  res.send({type: 'UPDATE'})
});

// delete an item from the db
router.delete('/items/:id', function(req, res) {
  res.send({type: 'DELETE'})
});
