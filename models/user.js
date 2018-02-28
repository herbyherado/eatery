'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Age: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Dish, {through: models.UserDish})
    User.hasMany(models.UserDish)
  };
  return User;
};