const actor = {
    name : 'Ananta',
    age : 40,
    phone : '0172858282',
    money : 1000000
}

// desturing an object
// if right is an object make sure left side is also an object
// use property name as a variable that contains the property value

const {phone, age} = actor;
const {money: taka} = actor; //alias name can be given like this to variable
// const {age} = actor;
// const {money} = actor;

console.log(phone, age);
console.log(taka);

// array destructuring
const numbers = [45, 54, 36, 63];
const [num1,, num2] = numbers; // skipping middle array by ',,' giving two comma
console.log(num1, num2);

// advance
const doubleThem = (a, b) => [a*2, b*2];

const [first, second] = doubleThem(9, 6);
console.log(first, second);