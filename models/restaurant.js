'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Latitude: DataTypes.STRING,
    Longitude: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Dish)
    // associations can be defined here
  };
  return Restaurant;
};