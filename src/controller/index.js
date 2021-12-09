const productsUse = require('../model/model-index');
const products = productsUse.getCharacters();

const mainController = {
    index: function (req, res){
        res.render('index', {products: products});
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