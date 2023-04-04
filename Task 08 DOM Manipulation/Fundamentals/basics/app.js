// // Get element by ID
// const Title = document.getElementById('main-heading');
// console.log(Title);

// // Get element by class name
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// // Get element by tag name
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// // query selector
// const container = document.querySelector('div');
// console.log(container);

// // query selector
// const containerAll = document.querySelectorAll('div');
// console.log(containerAll);

// // Styling an Element
// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// console.log(title);

// const list_items = document.querySelectorAll('.list-items');

// for (let i = 0; i < list_items.length; i++) {
//     list_items[i].style.fontSize = '2rem';
// }

// console.log(list_items);

// // Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li)

// // Modifying Text

// li.innerText = 'X-men';

// // Modifying attributes and classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// li.classList.add('list-items');

// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

// li.remove();

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// Traverse the DOM

// Parent node traversal

let ul = document.querySelector('ul');

console.log(ul.parentNode.parentNode.parentNode);
console.log(ul.parentElement.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Siblings nodes traversal

const div = document.querySelector('.container-items');

console.log(div.children);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

