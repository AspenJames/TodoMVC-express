'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    name: DataTypes.STRING
  }, {});
  TodoItem.associate = function(models) {
    models.TodoItem.belongsTo(models.TodoList)
  };
  return TodoItem;
};