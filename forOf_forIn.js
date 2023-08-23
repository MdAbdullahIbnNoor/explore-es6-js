// for of used on array and String
//  for in used in object


const numbers =[1, 5, 8, 6, 7, 9];
for(const num of numbers){
    // console.log(num);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    // console.log(char);
} 

const glass = {
    name : 'glass',
    color : 'golden',
    price: 12,
    isCleaned : true
};

for(const key in glass){
    const value = glass[key];
    // console.log(key + ': ' + value);
}

const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const valuee = glass[key];
    console.log(valuee);
}