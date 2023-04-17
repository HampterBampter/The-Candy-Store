let header = document.getElementsByTagName('header');
let sections = document.getElementsByTagName('section');
let current = document.querySelector('.current');
let nextCurrent = current.nextElementSibling;
let previousCurrent = current.previousElementSibling;
let div = document.getElementsByClassName('highlight')[0].parentElement.parentElement;
let sectionH2 = document.querySelectorAll('h2').parentNode;


console.log(header);
console.log(sections);
console.log(current);
console.log(nextCurrent);
console.log(previousCurrent);
console.log(div);
console.log(sectionH2);

