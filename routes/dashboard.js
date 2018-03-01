const express = require('express')
const model = require('../models')
const bodyParser = require('body-parser')
const dashboard = express.Router()

dashboard.use(bodyParser.urlencoded({extended: false}))
dashboard.use(bodyParser.json())

// Displays random image on dashboard
dashboard.get('/:id', (req, res) => {
    model.Dish.findAll({
        include: [{model: model.UserDish}]
        })
        .then(data => {
            let arr = []
            for (let i = 0; i < data.length; i++){
                if (data[i].UserDishes.length == 0){
                    arr.push(data[i])
                }
            }
            let dishes = arr.length
            console.log(dishes)
            let randomPick = Math.ceil(Math.random()*dishes)
            model.Dish.findOne({
                where: {id: randomPick}
                })
                .then(dish => {
                // res.send(dish)
                res.render('dashboard.ejs', {data: dish})
                })
        })
})

dashboard.post('/:id', (req, res) => {
    if (Object.keys(req.body)[0] === 'Reject'){
        console.log(req.params.id)
        // res.send(req.body)
        model.UserDish.create({
            UserId: req.params.id,
            DishId: req.body.Reject,
            Like: false,
            Displayed: true
        })
        .then(data => {
            console.log(data)
            res.redirect(`/dashboard/${req.params.id}`)
        })
    } else {
        console.log(req.params.id)
        // res.send(req.body)
        model.UserDish.create({
            UserId: req.params.id,
            DishId: req.body.Accept,
            Like: true,
            Displayed: true
        })
        .then(data => {
            console.log(data)
            res.redirect(`/dashboard/${req.params.id}`)
        })
    }
})

dashboard.get('/:id/reset', (req, res) => {
    // res.send('hello')
    model.UserDish.destroy({
        where: {UserId: req.params.id}
    })
    .then(() => {
        res.redirect(`/dashboard/${req.params.id}`)
    })
})


module.exports = dashboard