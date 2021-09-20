// select the root node

let rn = document.getElementsByTagName('html');
console.log(rn);

// select the last child of the root node

console.log(document.querySelector('html').lastElementChild);

// select all the children of the body element

console.log(document.querySelector('body').children);

// select the next sibling of the h2 node

console.log( document.querySelector('h2').nextSibling);

// select the parent element of the h1 node

console.log(document.querySelector('h1').parentNode);