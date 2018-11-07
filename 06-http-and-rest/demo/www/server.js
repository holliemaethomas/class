'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

// set up EJS as our template engine
app.set('view engine', 'ejs');

// Set the public folder up for /...
app.use( express.static('./public') );

app.get('/', homePage);
app.get('/teams', teamsPage);

function homePage(request,response) {
  response.render('site', {page:'./pages/home', title:'Our Site: Home'});
}

function teamsPage(request,response) {
  superagent.get(`${API}/teams`)
    .then( data => {
      response.render('site', {teams:data.body, page:'./pages/teams', title:'Our Site: Teams'});

    })
    .catch( error => console.error(error) );

}

app.listen(PORT, () => console.log(`Server up on ${PORT}`) );
