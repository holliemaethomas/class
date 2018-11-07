'use strict';

const fs = require('fs');

let file = process.argv.slice(2)[0];

fs.readFile(`${__dirname}/files/${file}`, (err,data) => {

  if ( err ) { throw err; }
  let contents = data.toString().trim();
  let newText = Math.random();
  let newBuffer = Buffer.from(newText.toString());

  fs.writeFile( `${__dirname}/files/${file}`, newBuffer, (err,data) => {

    if(err) { throw err; }

    fs.readFile(`${__dirname}/files/${file}`, (err,data) => {
      if (err) {
        throw err;
      }
      let contents = data.toString().trim();
      console.log('File Contents', contents);
    });

  });
});
