const express = require ('express');
const hbs = require ('express-handlebars');
const path = require("path");
const PORT = 3008; 

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')))

const indexRoute = require('./routes/indexRoutes');

app.use("", indexRoute);

app.listen(PORT, ()=> {
    console.log ('server is running')
});