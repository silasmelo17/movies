
require('dotenv').config();

import path from 'path';
import express from 'express';

const expressLayouts = require('express-ejs-layouts');

const app = express();

// Controllers
import routes from '@Routes/index';

// Express Config
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

// Static
app.use('/public/animes', express.static(path.join(__dirname, process.env.ANIMES_PATH || './' )));
app.use('/public/movies', express.static(path.join(__dirname, process.env.MOVIES_PATH || './' )));
app.use('/public/series', express.static(path.join(__dirname, process.env.SERIES_PATH || './' )));
app.use('/public', express.static(path.join(__dirname, './src/public')));

// Template
app.use(expressLayouts);
app.set('layout', './layouts/main');

app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
app.use(routes);

//Listen Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
