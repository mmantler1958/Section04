// select all unordered list (ul) elements
console.log(document.getElementsByTagName('ul'));
console.log(document.querySelectorAll('ul'));

// select all elements with the class "class-week"
console.log(document.getElementsByClassName('class-week'));
console.log(document.querySelectorAll('class-week'));

// select all elements with the class "nav-bar"
console.log(document.getElementsByClassName('.nav-bar'));
console.log(document.querySelectorAll('nav-bark'));
// select the element with the id "dog-picture" and save it to a variable
let pic = document.getElementById('dog-picture');

//
console.log(document.querySelector('.class-week').textContent);
