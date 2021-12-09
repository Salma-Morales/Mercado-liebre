const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/products.routes');
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, './public')))

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routes);


app.listen(port,() => {console.log(`Server running on port ${port}`)});