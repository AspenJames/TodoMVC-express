'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
    name: DataTypes.STRING
  }, {});
  TodoList.associate = function(models) {
    models.TodoList.hasMany(models.TodoItem)
  };
  return TodoList;
};