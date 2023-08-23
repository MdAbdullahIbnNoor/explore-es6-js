const numbers = [20, 56, 38, 96, 47, 51, 31, 64, 46, 39, 91, 99, 82, 65];
const arrayMax = Math.max(numbers);
console.log(arrayMax); // show 'NaN' as numbers is an object not in number form 

const arrayMaximum = Math.max(...numbers); // it only gives the number not the array as whole 
console.log(arrayMaximum);