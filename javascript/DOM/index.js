
#app {color: blue}

const appElement = document.getElementById('app')

console.log(appElement);

console.dir(appElement);

// queries the first p tag
const pElement = document.querySelector('p')
console.log(pElement.textContent);

// queries the contact element
const anchorContact = document.querySelector('#contact');
console.log(anchorContact);

// queries the element with the class of thridP
const thridP = document.querySelectorAll('.thirdP')
console.log(thridP);

const lis = document.getElementsByTagName('lis')
console.log(lis);

// lis[0].remove();

console.log(lis);

const myHTMLArray = Array.from('lis');

console.log(myHTMLArray);

const UL = document.querySelector('ul');
console.log(UL.lastElementChild);

const firstLi = document.querySelector('#first');
console.log(firstLi.nextElementSibling.nextElementSibling);




const aside = document.querySelector('aside');

// while we have a first child
while (aside.firstChild) {
  // remove the first child 
  const removeChild = aside.removeChild(aside.firstChild);

  console.log(removeChild);
}

