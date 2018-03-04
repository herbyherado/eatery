const routes = require("express").Router();
const Models = require("../models");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const checklogin = require('../helpers/checkLogin')

routes.use('/', checklogin)
routes.get("/", (req, res) => {
  Models.UserDish.findAll({
    include: [
      {model: Models.Dish}
    ],
    where: {
      UserId: req.session.profile.id
    }
  }).then(userdishes => {
      let arr = []
      userdishes.forEach((userdishes) => {
        arr.push(userdishes.Dish.RestaurantId)
      })
      Models.Restaurant.findAll({
        where: {
          id: {
            [Op.in]: arr
          }
        }
      }).then(restaurants => {
        // res.send(restaurants)
        res.render('list.ejs', {restaurants: restaurants})
      })
    })
    .catch(err => {
      console.log(err);
    });
});

routes.get("/get_map/:id", (req, res)=> {
  // res.status(200).json({ message: 'Connected!'})
  Models.Restaurant.findById(req.params.id)
    .then(restaurant => {
      // res.send(restaurant)
      res.render('list_map.ejs', {restaurant: restaurant})
    }).catch(err => {
      console.log(err)
    })
})

module.exports = routes;
