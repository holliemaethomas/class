'use strict';

const fs = require('fs');
const util = require('util');

fs.readFile('./john.txt', (err,data) => {
  if ( err ) { throw err; }
  let actualContents = data.toString().trim();
  console.log('From Callback', actualContents);
});

// Make fs.readFile work like a promise ...
const rfp = util.promisify(fs.readFile);

rfp('./john.txt')
  .then( data => console.log('From Promise', data.toString().trim()) )
  .catch( error => console.error(error) );


// Do a bunch of promises all at once and get back all of the results!
let promises = [];
promises.push( rfp('./john.txt') );
promises.push( rfp('./john.txt') );
promises.push( rfp('./john.txt') );
promises.push( rfp('./john.txt') );
promises.push( rfp('./john.txt') );

Promise.all(promises)
  .then(data => {
    let contents = data.map( (buff) => {
      return buff.toString().trim();
    });
    console.log('From All...', contents);
  })
  .catch( error => {throw error;} );
