// function defination and storing reference in a constant
const show = function(num1) {
    console.log(`number is ${num1}`);
    return num1 + 2;
}

const num2 = show(3);
console.log(`Number is now ${num2}`);

// function returning function
const addMe = function(num1) {
    // this returned funxction has num1 in its closure scope
    return function(num2) {
        return num1 + num2;
    }
}

// reference to a function which has num1 = 1 fixed value in closure scope
const addOne = addMe(1);
// reference to a function which has num1 = 2 fixed value in closure scope
const addTwo = addMe(2);
const num = addOne(6);
console.log(num);
console.log(addTwo(4));

const addThem = function( num1 , num2) {
    return num1 + num2;
}

console.log( addMe(1)(2));
