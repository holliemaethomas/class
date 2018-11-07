'use strict';

let stackPP = require('./stack-pp.js');
let stackSU = require('./stack-su.js');

class Stack {
  
  constructor(type) {
    let implementation = stackPP;
    switch(type) {
      case 'pp': 
        implementation = stackPP;
        this.stack = new implementation();
        break;
      case 'su': 
        implementation = stackSU;
        this.stack = new implementation();
        break;
      default:
        this.stack = new implementation();
        break;
    }
  }
  
  push(value) { 
    this.stack.push(value);
  }
  
  pop() {
    return this.stack.pop();
  }
  
}

module.exports = Stack;