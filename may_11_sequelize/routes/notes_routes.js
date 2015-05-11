'use strict';

var bodyparser = require('body-parser');
var Note = require('../models/Note');
var Sql = require('sequelize');
var sql = new Sql('notes_dev', 'notes_dev', 'foobar123', {
  dialect: 'postgres'
});

module.exports = function(router) {
  router.use(bodyparser.json());

  router.post('/notes', function(req, res) {
    sql.sync()
    .then(function() {
      Note.create(req.body) 
      .then(function(data) {
        res.json(data);
      })
      .error(function(err) {
        console.log(err);
        res.status(500).json({msg: 'internal server error'});
      });
    });
  });

  router.get('/notes', function(req, res) {
    sql.sync()
    .then(function() {
      Note.all()
      .then(function(data) {
        res.json(data);
      })
      .error(function(err) {
        console.log(err);
        res.status(500).json({msg: 'server error'});
      });
    });
  });
};
