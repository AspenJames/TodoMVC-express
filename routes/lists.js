var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET lists */
router.get('/', (req, res) => {
  models.TodoList.findAll()
    .then(lists => {
      res.render('lists', {
        title: "ToDo MVC",
        lists: lists
      });
    });
  });

  /* POST /lists/:id */
  router.post('/:id', (req, res) => {
    console.log(req.params)
    models.TodoItem.create({
      TodoListId: parseInt(req.params.id),
      name: req.body.name
    }).then(() => {
      res.redirect(`/lists/${req.params.id}`);
    })
  })

  /* POST lists */
router.post('/', (req, res) => {
  models.TodoList.create({
    name: req.body.name
  }).then(() => {
    res.redirect('/');
  });
});

router.get('/:id', (req, res) => {
  models.TodoList.findByPk(req.params.id, {
    include: [ models.TodoItem ]
  }).then(list => {
    res.render('list', {
      title: "ToDo MVC",
      list: list, 
      todos: list.TodoItems
    });
  })
})


/* DELETE /:id */
router.get('/:id/destroy', (req, res) => {
  models.TodoList.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/');
  })
})

module.exports = router;
