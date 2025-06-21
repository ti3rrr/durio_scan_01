const axios = require('axios');

const index = async function (req, res){
    res.render('index', { text: ''})
}

const home = async function (req, res){
    res.render('home', { text: 'home Page'})
}

const result = async function (req, res){
    res.render('result', { text: 'Result Page'})
}


module.exports = { index, home, result }