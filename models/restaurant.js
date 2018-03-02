'use strict';
const getMap = require('../helpers/index')
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

  Restaurant.prototype.myMap = function() {
    return getMap(this.Name, parseFloat(this.Latitude), parseFloat(this.Longitude))
  }
  return Restaurant;
};