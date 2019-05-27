var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Galih Agus Saputra'})
})

module.exports = router;