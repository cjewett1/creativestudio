// Step 1: Defining Constants - select element user will click on (hamburger icon)

const btn = document.querySelector('.toggle-btn'); //targeting a class requires a . just like in css.



// Step 2: Adding A Click Event

btn.addEventListener('click', () => {

    //In here goes what we want to happen when the button is clicked - in this case. Show nav.

    document.querySelector('nav').classList.toggle('show-nav'); 
    console.log ('does this work?');
    // In the classList method, it only expects class names, therefore no . is needed to target the show-nav

});   

//Create a special class name in the css that will show the nav
                
