'use strict';

let hardThingToDo = (cb) => {
  let text = 'That was tough';
  console.log('Doing it');
  cb(undefined, text);
  console.log('Done it');
};

let errorFirstCallback = (err,data) => {
  if ( err ) { throw err; }
  console.log('Got Some Data', data);
};

hardThingToDo(errorFirstCallback);

hardThingToDo( (err,data) => {
  if ( err ) { throw err; }

  hardThingToDo( (err,data) => {
    console.log('Got Some Data', data);
  });

});
