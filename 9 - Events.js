//EVENTS 

//JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.
//When the page loads, it is called an event. When the user clicks a button, that click too is an event. 
//Other examples include events like pressing any key, closing a window, resizing a window, etc.

const btn = document.querySelector('.btn');

//Takes in 2 parameters, the event you're listening for 
//and a function that activates when that event happens.

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');

    // gives us the element the event is on
    console.log(e.target);
    // we can then specify all the different attributes of the event we would like
    console.log(e.target.class);
})




// the below function changes the background of the form element upon a click event.

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    // you can implement css styling by adding the class in the stylesheet to 
    //this function so that upon a click it changes to that styling.
    document.querySelector('body').classList.add('bg-dark');

    //the last child element of the items list changes to hello once the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'

});


// you can even change the event type to hover by replacing "click" by "mouseover"
// there are various other even functions which this can be changed too as well such as "mouseout".
// you can look up in the mdn documentation different events.

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    // you can implement css styling by adding the class in the stylesheet to 
    //this function so that upon a click it changes to that styling.
    document.querySelector('body').classList.add('bg-dark');

    //the last child element of the items list changes to hello once the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'

});