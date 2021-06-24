// Object Literals - A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:
    {
        street: '51st grafton',
        city: 'London',
        country: 'UK'
    }

}


console.log(person.firstName); // this is how we access a single value in an arry and its respective key value pair

console.log(person.firstName, person.lastName); //this is how we access multiple values

console.log(person.hobbies[1]); // how we access an item which is in a list which is within an array

console.log(person.address.City); // how we access city from the address object


//Destructuring - pulling certain variable out and initialise them as consts.

const { firstName, lastName } = person;

console.log(firstName); // Hence first name and last name are now consts.

const { age, address: { city } } = person; // How you would initialise an embedded object using destructuring

console.log(city);

// Adding Properties to object literals

person.email = 'john@gmail.com'; // like so we have added the email properties

console.log(person);

// Array of Objects

const todos = [
    {
        ID: 1,
        text: 'take trash out',
        isCompleted: true
    },

    {
        ID: 2,
        text: 'meeting with boss',
        isCompleted: true
    },

    {
        ID: 3,
        text: 'dentist appointment',
        isCompleted: false
    }

];

console.log(todos[1].text); //how to logout specific value from array of objects, notice how index for 2nd task is 1.


// Converting standard arrays to Json format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


