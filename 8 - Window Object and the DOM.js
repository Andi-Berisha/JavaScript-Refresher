//SELECTORS

//SINGLE ELEMENT SELECTORS

//get element by id
console.log(document.getElementById('my-form'));

//Query Selector - will on select 1 elemenet so if there is more than 1 it will select first one
console.log(document.querySelector('my-form'));

//MULTIPLE ELEMENT SELECTORS 

//Query selector All - gives you node list which you can run array methods on unlike get elements by class name
console.log(document.querySelectorAll('.item'));

const items = (document.querySelectorAll('.item'));

// example of array method on item elements using qsa
items.forEach((item) => console.log(item));

//MANIPULATING THE DOM

const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

// You change the text content of a list of elements by using the textContent function
ul.firstElementChild.textContent = 'Hello';

//If you're elements are in a nodelist you can use indexing to access them and change the text content and inner text
ul.children[1].innerText = 'Brad';

// you can add html dynamically by using inner html.
ul.lastElementChild.innerHTML = '<h2>Hello</h2>';

const btn = document.querySelector('.btn');

// used for events and realtime manipulation of components
btn.style.background = 'red';