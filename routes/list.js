const routes = require("express").Router();
const Models = require("../models");

routes.get("/", (req, res) => {
  Models.Restaurant.findAll({
  })
    .then(restaurants => {
      // res.send(restaurants)
      // console.log(parseFloat(restaurants[0].Latitude))
      res.render('list.ejs', {restaurants: restaurants})
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

// Testing
// routes.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!'})
// })

module.exports = routes;
