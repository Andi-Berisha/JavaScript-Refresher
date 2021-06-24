//CONDITIONALS - Conditional statements control behavior in JavaScript and 
//determine whether or not pieces of code can run

const x = 9;
const y = 11;

// 'x==10' will log only if x is equal to the value
// whereas ''x ===10 will log only if x is equal to the value and type 


if (x == 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

// '||' means OR 
// '&&' means AND

if (x > 10 || y > 10) {
    console.log('x is more than 5 OR y is more than 10');
}

if (x > 5 && y > 10) {
    console.log('x is more than 5 AND y is more than 10');
}

//TERNARY Conditional - short hand if statement

// '?' represents ternary operator
// so essentially if 'x > 10' is true ?(then) print 'red' :(else) print 'blue'
const color = x > 10 ? 'red' : 'blue'
console.log(color);

//SWITCH CASES - The switch statement is used to perform different actions based on different conditions.

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
}