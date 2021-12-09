const productsUse = require('../model/products-model');
const products = productsUse.getProducts();

const mainController = {
    index: function (req, res){
        res.render('home');
    },
    register: function (req, res){
        res.render('register');
    },
    create: function (req, res){
        let newCharacter = {
            ...req.body,
            image: req.file,
        }
        productsUse.create(newCharacter);
        res.render('register')
    }
}

module.exports = mainController;