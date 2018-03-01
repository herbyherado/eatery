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

edit.get('/dish', (req, res) => {
    res.render('dish-list.ejs')
})



module.exports = edit