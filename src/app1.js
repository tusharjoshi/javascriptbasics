console.log('Hello World! Again');

var name = 'MyName';

// For variable with mutable value
let age = 29;

// for constant values, not mutable
const CITY = 'Nagpur';

console.log(name);

// object creation
const myObject = {
    name: 'Tushar',
    age: 45,
    city: 'Nagpur',
    state: 'MH',
};

console.log( myObject.name );
console.log( myObject );

// template string literal
const label = `This is sample ${myObject.name}`;
console.log(label);