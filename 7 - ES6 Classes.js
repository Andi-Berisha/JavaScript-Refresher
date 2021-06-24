// CLASS

class Person {

    constructor(firstName, Surname, dob) {
        this.firstName = firstName;
        this.Surname = Surname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return `${this.firstName} ${this.Surname}`

    }


    getFullName() {
        return this.dob.getFullYear();
    }
    //Using classes to do the same thing the ".prototypes" function does.
    //Essentially divide the properties and methods using a constructor function
    //instead of using .prototype in the constructor function.
}


//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1993');
const person2 = new Person('Mary', 'Doe', '1-3-1993');

console.log(person1.getFullName());
console.log(person2);