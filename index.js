
require('dotenv').config();
require('./src/database/');
// require('./src/util/getData')();

const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Controllers
const moviesRouter = require('./src/routes/web/movies');
const seriesRouter = require('./src/routes/web/series');
const moviesRouterAPI = require('./src/routes/api/movies');
const categoriesRouterAPI = require('./src/routes/api/categories');

// Express Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use( '/public/animes', express.static(path.join( __dirname, process.env.ANIMES_PATH )) );
app.use( '/public/movies', express.static(path.join( __dirname, process.env.MOVIES_PATH )) );
app.use( '/public/series', express.static(path.join( __dirname, process.env.SERIES_PATH )) );
app.use( '/public', express.static(path.join( __dirname, './src/public' )) );

// Template
app.use(expressLayouts);
app.set('layout', './layouts/main');

app.set('views', './src/views' );
app.set('view engine', 'ejs');

// Routes
app.use(moviesRouterAPI);
app.use(categoriesRouterAPI);

app.use(moviesRouter);
app.use(seriesRouter);

//Listen Server
const PORT = process.env.PORT || 8080;
app.listen( PORT, err => {
    if(err) console.log(err);
    console.log( `App listening on port: ${PORT}` );
});
