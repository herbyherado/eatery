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
edit.get('/restaurant/update/:id', (req, res) => {
    model.Restaurant.findAll()
        .then(data => {
            // res.send(data)
            res.render('restaurant-list.ejs', {data: data})
        })
})

edit.post('/restaurant/update/:id', (req, res) => {
    model.Restaurant.update({
        Name: req.body.Name,
        Address: req.body.Address,
        City: req.body.City
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
    res.render('dish-list.ejs')
})



module.exports = edit