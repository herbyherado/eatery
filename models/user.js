'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Age: DataTypes.STRING,
<<<<<<< HEAD
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
=======
    Username: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value, next) {
          User.findAll({
            where: {
              Username: value
            }
          }).then((data) => {
            if(data.length > 0) {
              return next('username has already been taken')
            } else {
              next()
            }
          }).catch(err => {
            next(err)
          }) }
      }
    },
    Password: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9]{8,}$/,
          msg: 'password must contain alphanumeric characters and must be at least 8 characters'
        }
      }
    }
>>>>>>> 33cb7f049a19b7e05619ecc458af07f7307b415c
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Dish, {through: models.UserDish})
    User.hasMany(models.UserDish)
  };
  return User;
};