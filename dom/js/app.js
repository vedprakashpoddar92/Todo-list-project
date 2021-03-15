//Create element

/*const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';

li.setAttribute('title','new-item');
li.appendChild(document.createTextNode('Ved new item'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.append(link);
document.querySelector('ul.collection').appendChild(li);
console.log(li);
//Replace Element

const newHeading = document.createElement('h2');
newHeading.id = 'task=title';
newHeading.appendChild(document.createTextNode('Task-List'));

//get the old Heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading,oldHeading);
console.log(newHeading);*/

//Replace Elements

//const lis = document.querySelectorAll('li');
//const list = document.querySelector('ul');

//Remove list Item
//lis[0].remove()
//Remove child
//list.removeChild(lis[3]);

//CLASSES & ATTR

/*const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes

/*val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;*/

//Attr
/*val = link.getAttribute('href');
val = link.setAttribute('href', 'www.google.com');
link.setAttribute('title', 'task-list');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);*/

//Replace Element
//Create h2 element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//heading test style
newHeading.style.color = '#006699';
newHeading.style.background = '#ccc';
//Create new text node
newHeading.appendChild(document.createTextNode("Task List"));

//Get old heading
const oldHeading = document.getElementById('task-title');
//Get parent 
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);

//Remove Element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list Item

//lis[1].remove();
//Remove child
//list.removeChild(lis[3]);

//Class & Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(link);
let val;
val = link.className;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

//Attr 
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://www.visionias.in');
val = link.setAttribute('target','_blank' );
val = link.hasAttribute('href');
link.removeAttribute('href');
console.log(val);

