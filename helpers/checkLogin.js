function checklogin(req, res, next){
    if(!req.session.isLogin){
        res.redirect('/')
    } else {
        next()
    }
}

module.exports = checklogin