// String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

//Template String
console.log(`My name is ${name} and I am ${30}`);


// String Methods
const s = 'tech, comps, it, code';

console.log(s.split(', '));


// Arrays - Variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true] // in Js you can have multiple data types in the same array

console.log(fruits);

console.log(fruits[0]); // arrays are always 0 based

fruits[5] = 'grapes'; // you can add values to the array like this but you cannot reassign the array

fruits.push('mangoes'); // method for adding an item to the end of arrays

fruits.unshift('strawberries') // method for adding an item to the beginning of arrays

fruits.pop(); // deletes the last item in the array

console.log(Array.isArray(fruits)); // method to verify wither variable is array or not

console.log(fruits.indexOf('oranges')); // this method provides you the index of the item in the array

console.log(fruits);



