'use strict';

let add = (a,b) => {
  console.log(a,b);
  if( b === 1 ) {
    return a + b;
  }
  return add(a + 1, b - 1);
};

console.log( add(3,4) );