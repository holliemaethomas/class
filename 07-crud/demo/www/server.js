'use strict';

// 3rd Party Libs
const express = require('express');
const methodOverride = require('method-override');

// Esoteric Libs
const categoryRoutes = require('./category-routes.js');
const siteRoutes = require('./site-routes.js');

const app = express();

// Set the view engine for templating
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({extended:true}));
app.use( methodOverride( (request,response) => {
  if( request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use(siteRoutes);
app.use(categoryRoutes);


module.exports = {
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};






