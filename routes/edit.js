const express = require('express')
const model = require('../models')
const bodyParser = require('body-parser')
const edit = express.Router()

edit.use(bodyParser.urlencoded({extended: false}))
edit.use(bodyParser.json())

edit.get('/', (req, res) => {
    res.render('edit.ejs')
})

edit.get('/restaurant', (req, res) => {
    model.Restaurant.findAll()
        .then(data => {
            // res.send(data)
            res.render('restaurant-list.ejs', {data: data})
        })
})
edit.get('/restaurant/add/', (req, res) => {
    res.render('restaurant-add.ejs')
})

edit.post('/restaurant/add', (req, res) => {
    model.Restaurant.create({
        Name: req.body.Name,
        Address: req.body.Address,
        City: req.body.City,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(()=> {
        res.redirect('/restaurant')
    })
})
edit.get('/restaurant/update/:id', (req, res) => {
    model.Restaurant.findOne({where: {id: req.params.id}})
        .then(data => {
            // res.send(data)
            res.render('restaurant-update.ejs', {data: data})
        })
})

edit.post('/restaurant/update/:id', (req, res) => {
    model.Restaurant.update({
        Name: req.body.Name,
        Address: req.body.Address,
        City: req.body.City,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude
    },{
        where: {id: req.params.id}
    })
    .then(()=> {
        res.redirect('/restaurant')
    })
})

edit.get('/restaurant/delete/:id', (req, res) => {
    model.Restaurant.destroy({where: {id: req.params.id}})
        .then(data => {
            console.log(data)
            res.redirect('/restaurant')
        })
})

edit.get('/dish', (req, res) => {
  model.Dish.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
  .then((dishes) => {
    // res.send(dishes) 
    res.render('dish-list.ejs', {dishes: dishes})   
  }).catch(err => {
    console.log(err)
  })
})

edit.get('/dish/update/:id', (req, res) => {
    model.Dish.findById(req.params.id)
        .then(dish => {
            // res.send(dish)
            res.render('edit_dish.ejs', {dish: dish})
        }).catch(err => {
          console.log(err)
        })
})

edit.post('/dish/update/:id', (req, res) => {
  let updDish = {
    Name: req.body.Name,
    Price: req.body.Price,
    Cuisine: req.body.Cuisine
  }
  model.Dish.update(updDish, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/edit/dish')
  }).catch(err => {
    console.log(err)
  })
})

edit.get('/dish/delete/:id', (req, res) => {
  model.Dish.findById(req.params.id)
    .then(dish => {
      dish.destroy()
        .then(() => {
          res.redirect('/edit/dish')
        }).catch(err => {
          console.log(err)
        })
    }).catch(err => {
      console.log(err)
    })
})

edit.get('/dish/add', (req, res)=>{
  res.render('dish_add.ejs')
})

edit.post('/dish/add', (req, res)=>{
  let newDish = {
    Name: req.body.Name,
    Price: req.body.Price,
    Cuisine: req.body.Cuisine
  }
  model.Dish.create(newDish)
    .then(()=>{
      res.redirect('/edit/dish')
    })
    .catch(err=>{
      console.log(err)
    })
})

module.exports = edit