'use strict';

const Stack = require('./stack.js');

let s = new Stack('su');

s.push(1);
s.push(2);
s.push(3);
s.push(4);

console.log(s);

console.log(s.pop(), s);
console.log(s.pop(), s);
console.log(s.pop(), s);
console.log(s.pop(), s);
