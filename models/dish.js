'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dish = sequelize.define('Dish', {
    Name: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Cuisine: DataTypes.STRING,
    RestaurantId: DataTypes.INTEGER,
    Image: DataTypes.STRING
  }, {});
  Dish.associate = function(models) {
    // associations can be defined here
    Dish.belongsTo(models.Restaurant)
    Dish.belongsToMany(models.User, {through: models.UserDish})
    Dish.hasMany(models.UserDish)
  };
  return Dish;
};