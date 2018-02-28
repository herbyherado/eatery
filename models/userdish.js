'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserDish = sequelize.define('UserDish', {
    UserId: DataTypes.INTEGER,
    DishId: DataTypes.INTEGER,
    Like: DataTypes.BOOLEAN,
    Displyed: DataTypes.BOOLEAN
  }, {});
  UserDish.associate = function(models) {
    // associations can be defined here
    UserDish.belongsTo(models.User)
    UserDish.belongsTo(models.Dish)
  };
  return UserDish;
};