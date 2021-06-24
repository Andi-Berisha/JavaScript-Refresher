// FUNCTIONS - a set of statements that performs a task or calculates a value

function addNums(a,b){
    return a+b;

}

console.log(addNums(11,5)); 

// ARROW FUNCTIONS - Allows the creation of JS functions in a cleaner way compared to regular functions.

const SubNums = (a,b) =>{ return a-b};
//'subnums' is the name of the function
// (a,b) are the function arguments
// 'return a - b' is the function body 

console.log(SubNums(5,3));

// Useful when using 'FOR EACH' loops

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

// you do not need curly braces if 
todos.forEach((todo)=>console.log(todo.text));

