const express =require("express");

const morgan=require("morgan");
const exphbs=require("express-handlebars");
const path=require("path");

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, "views"));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;