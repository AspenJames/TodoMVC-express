var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.TodoList.findAll({
    include: [ models.TodoItem ]
  }).then(lists => {
    res.render('index', {
      title: "ToDo MVC",
      lists: lists
    });
  });
});

module.exports = router;
