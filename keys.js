const glass = {
    name : 'glass',
    color : 'golden',
    price: 12,
    isCleaned : true
};

const keys = Object.keys(glass); 
// [ 'name', 'color', 'price', 'isCleaned' ]


const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]


const entries = Object.entries(glass);
// ! It was a two dimentional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// deleting a Property of an object
// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);
console.log(glass);

