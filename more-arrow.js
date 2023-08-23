const difference = (x, y) => x - y;
const result = difference(5, 4);
// console.log(result);


// Single or one parameter
const getAge = (person) => person.age;
const student = { name : 'Ananta', age : 40};
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([12, 35, 62, 82, 45, 62, 73]);
console.log(third);

// No parameter
const getPI = () => Math.PI;
console.log(getPI().toFixed(3));

// Large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}

const math = doMath(4, 5, 6);
console.log(math);
