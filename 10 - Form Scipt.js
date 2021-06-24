//MINI FORM SCRIPT PROJECT
//input details into the form, submit them and then print them to the screen

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    // form validation, if name value or email value is empty we generate an alert
    if (nameInput.value === '' || emailInput.value === '') {

        //here we are using the classlist property to add a class with styling to the 'msg' element
        // the classlist property is read only so we us the '.add' method to add it to the element

        msg.classList.add('error');
        //msg is a div under the "add user" text and we're instructing it to pop up here with the text below if the fields are empty

        msg.innerHTML = 'Please Enter all fields';

        //this function takes in a function and performs it after a set amount of time
        //in this example we used a remove function and we set it to active after 3 secs
        setTimeout(() => msg.remove(), 3000);
    }

    else {

        // this function creates a list element  and assigns it to the const 'li'
        const li = document.createElement('li');

        //this line appends the nameInput value and emailInput value to the newly created list element
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // this line appends the modifiest list element with the name and email values to the userlist div which
        // is below the submit button and displays the newly submitted names.
        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }

    // nameInput here just gives you the actual element '#name'
    // the actual value of name input (so the text inside the element) is accest with the '.value' property
    console.log(nameInput.value);
}


