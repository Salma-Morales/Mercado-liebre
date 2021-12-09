const fs = require('fs');
const path = require('path');
const productsPath = path.resolve(__dirname, "./products-data.json");
const products = JSON.parse(
  fs.readFileSync(productsPath, {
    encoding: "utf8",
  })
);

const idGen = function (){
  let newId = 0;
 products.forEach(item => {
    if(newId < item.id){
      newId= item.id;
    }
  })
  return newId + 1;
};

const productsModel = {
  getProducts: function () {
    return JSON.parse(
      fs.readFileSync(productsPath, {
        encoding: "utf8",
      })
    );
  },
  createProduct: function(base){
    base = JSON.stringify(base, null, 4);
    return fs.writeFileSync(productsPath, base)
  },
  create: function (character) {
    let db = this.getproducts();
    character.id = idGen();
    db.push(character);
    this.createProduct(db);
  },


}


module.exports = productsModel;