'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Age: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Dish, {through: models.UserDish})
    User.hasMany(models.UserDish)
  };
  User.prototype.fullName = function(){
    return `${this.FirstName} ${this.LastName}`
  }
  return User;
};