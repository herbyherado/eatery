const routes = require('express').Router()
const Models = require('../models')

routes.get('/', (req, res) => {
  Models.Dish.update({RestaurantId: 17}, {
    where: {id: 29}
  }).then(()=>{
    res.redirect('/edit/dish')
  }).catch(err => {
    console.log(err)
  })
})

routes.get('/dish', (req, res) => {
  Models.Dish.findAll({
    include: [{
      model: Models.Restaurant
    }], order: [
      ['id', 'ASC']
    ]
  })
  .then((data) => {
    res.send(data)    
  }).catch(err => {
    console.log(err)
  })
})

// Testing
// routes.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!'})
// })

module.exports = routes;