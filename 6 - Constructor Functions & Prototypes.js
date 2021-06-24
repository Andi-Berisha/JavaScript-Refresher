// CONSTRUCTOR FUNCTION - we can add data and methods to this object (constructor)

function Person(firstName, Surname, dob) {
    this.firstName = firstName;
    this.Surname = Surname;
    this.dob = new Date(dob);



}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.Surname}`;
}
// we can store functions into the prototype of the object instead of the object 
//itself.

//Instantiate object - creates new object using the Person constructor
const person1 = new Person('John', 'Doe', '4-3-1993');
const person2 = new Person('Mary', 'Doe', '1-3-1993');

//remember methods must always have brackets at the end of them.
console.log(person2.getBirthYear());
console.log(person1.getFullName());

console.log(person2);