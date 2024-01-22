console.log("hi");

// class definition
class Person {
    constructor() {
        console.log("constructor is called");
        this.name = 'Name';
    }

    show() {
        console.log("show is called");
        console.log(`My name is ${this.name}`);
    }
}

// object instantiation
const p1 = new Person();
p1.show();

const p2 = new Person();
p2.show();

console.log(p1);

// saving method reference out of object
const s1 = p1.show;
const myObj = { name: 'Abba' };

// passing a different object-environment-scope
s1.call(myObj);

let name = 'Unique';
const s3 = p1.show;
s3.call(myObj);