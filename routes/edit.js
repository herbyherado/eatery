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
    res.render('dish-list.ejs')
})



module.exports = edit