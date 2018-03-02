const express = require('express')
const model = require('../models')
const bodyParser = require('body-parser')
const dashboard = express.Router()
const checklogin = require('../helpers/checkLogin')

dashboard.use('/', checklogin)
dashboard.use(bodyParser.urlencoded({extended: false}))
dashboard.use(bodyParser.json())

dashboard.get('/', (req, res) => {
    model.User.findOne({where: req.session.profile.id})
    .then(profile => {
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
                // checks by avalaible id
                let newArr = []
                for (let j = 0; j < arr.length; j++){
                    newArr.push(arr[j].id)
                }
                // res.send(newArr)
                let dishes = arr.length
                let randomPick = Math.ceil(Math.random()*dishes)
                model.Dish.findOne({
                    where: {id: newArr[randomPick]}
                    })
                    .then(dish => {
                        // res.send(dish)
                    res.render('dashboard.ejs', {data: dish, user: profile})
                    })
            })
    }) 
})

dashboard.post('/', (req, res) => {
    if (Object.keys(req.body)[0] === 'Reject'){
        model.UserDish.create({
            UserId: req.session.profile.id,
            DishId: req.body.Reject,
            Like: false,
            Displayed: true
        })
        .then(data => {
            console.log(data)
            res.redirect(`/dashboard`)
        })
    } else {
        model.UserDish.create({
            UserId: req.session.profile.id,
            DishId: req.body.Accept,
            Like: true,
            Displayed: true
        })
        .then(data => {
            console.log(data)
            res.redirect(`/dashboard`)
        })
    }
})

dashboard.get('/reset', (req, res) => {
    model.UserDish.destroy({
        where: {UserId: req.session.profile.id}
    })
    .then(() => {
        res.redirect(`/dashboard`)
    })
})


module.exports = dashboard