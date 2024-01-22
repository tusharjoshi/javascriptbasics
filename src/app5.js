// spread operator 

const numberList = [1,2, 3,4];

console.log(numberList);

const largeList = [ ...numberList, 20, 30];

console.log(largeList);

function addThem(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

console.log(addThem(...numberList));

const cities = ['Nagpur', 'Mumbai'];
const villages = ['Ramtek', 'Umred'];

const allList = [...cities, ...villages];
console.group(allList);

// rest operator

function sumList(...numArray) {
    let sum = 0;
    numArray.forEach(num => {
        sum = sum + num;
    });
    return sum;
}
console.log(sumList([1,2,3]));
console.log(sumList(2, 3, 4));

function something(num1, num2, ...restNumbers) {
    
}