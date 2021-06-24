// LOOPS -  Used to peform repeated tasks based on a condition.

// For Loops

//i = 0 is the iterator/variable
//i<10 is the condition that needs to be met
//i++ is the increment which adds 1 to the i variable

for (let i = 0; i <= 10; i++) {
    console.log(`For loop Number:${i}`);

}


// While loops - we set the variable outside of the loop

let i = 0;

while (i < 10) {
    console.log(`For while loop Number:${i}`);
    i++;     // must increment the i or it will be a never ending loop
}


// LOOPING THROUGH ARRAYS

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

// Using For Loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);

}

// Using for of Loop
for (let todo of todos) {
    console.log(todo.ID);
}

//HIGH ORDER ARRAY METHODS

//forEach - just loops through them
// function (todo) essentially returns a function when something gets done to the 
// to do variable e.g "todo.text" returns the text for all items in the todo array.

todos.forEach(function (todo) {
    console.log(todo.text);
});


//Map - allows us to create a new array from an array
const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText);

console.log(todoText);


//Filter = Allows us to create a new array based on a condition applied to a prior array
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);






