'use strict';
// Read and report file contents using Promise.all

const fileReaderFixed = require('./lib/reader-fixed.js');
const fileReaderCallbacksArray = require('./lib/reader-callbacks-array.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderPromiseAll = require('./lib/reader-promise-all.js');

// Obtain and assert input
let files = process.argv.slice(2);
if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// Task 1: Fix the broken code with nested callbackw
fileReaderFixed(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});

// Task 2: Use callbacks to read any number of files
fileReaderCallbacksArray(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callbacks Extended:', data);
});

// Task 3: Use a chain of promises to read 3 files in order
fileReaderPromises(files)
  .then(contents => console.log('From Promises():', contents));


// Task 4: Use Promise.all to read any number of files with promises
fileReaderPromiseAll(files)
  .then(contents => console.log('From Promise.all():', contents));
