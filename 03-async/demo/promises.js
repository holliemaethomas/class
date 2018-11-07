'use strict';

let longTask = (foo) => {
  return new Promise( (resolve,reject) => {
    if(foo) { resolve('ok'); }
    else { reject('whoops'); }
  });
};

console.log('First');

longTask(false)
  .then(data => { console.log(data); return longTask(data); } )
  .catch( error => console.error(error) )
  .then(data => { console.log(data); return longTask(data); } )
  .then(data => { console.log(data); return longTask(data); } )
  .then(data => { console.log(data); return longTask(data); } )
  .then(data => { console.log(data); return longTask(data); } )

console.log('Last');
