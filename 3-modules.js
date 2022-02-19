const { john, peter } = require('./4-names');
const sayHi = require('./5-util');
const data = require('./6-alternative-flavor');
require('./7-mid-grenade');

// console.log(names);

sayHi('susan');
sayHi(john);
sayHi(peter);

//or
/* const name = require('./4-names');

console.log(names);
sayHi('susan');
sayHi(name.john);
sayHi(name.peter); */