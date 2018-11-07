'use strict';

const Vehicle = () => ({
  drive: () => 'Moving Forward',
  stop: () => 'Stopping',
});


function Car(name) {

  let wheels = 4;
  let car = Object.assign(
    {}, {name}, {wheels}, Vehicle()
  );

  return Object.freeze(car);
}

function Motorcycle(name) {

  let wheels = 2;
  let cycle = Object.assign(
    {}, {name}, {wheels}, {wheelie}, Vehicle()
  );

  function wheelie() { return 'Wheee!'; }

  return Object.freeze(cycle);
}

module.exports = {Car, Motorcycle};


