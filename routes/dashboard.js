const express = require('express')
const model = require('../models')
const bodyParser = require('body-parser')
const dashboard = express.Router()

dashboard.use(bodyParser.urlencoded({extended: false}))
dashboard.use(bodyParser.json())

// Displays random image on dashboard
dashboard.get('/', (req, res) => {
    // res.send('hello')
    model.Dish.findAll({
        where : {
            Displayed: false
        }
    })
    .then(menu => {
        let dishes = menu.length
        let randomPick = Math.floor(Math.random()*dishes-1)
        model.Dish.findOne({
                where: {
                    id: randomPick
                }
            })
            .then(dish => {
                res.render('dashboard.ejs', {data: dish})
            })
    })
})



module.exports = dashboard