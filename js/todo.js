// get HTML elements
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

// create empty array to store to do list
let toDos = [];

// save to do list in local storage
function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
}

// delete selected to do from the list
function deleteToDo(e) {
  const li = e.target.parentElement;

  li.remove();

  // loop through to do list array and delete where id matches
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

  // save after delete
  saveToDos();
}

// add to do and display on the page
function paintToDo(newToDo) {
  // create html elements
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

  // assign attribute/values to the html elements
  li.id = newToDo.id;
	span.innerText = newToDo.text;
	button.innerText = '❌';

  // append span and button to li created
	li.appendChild(span);
	li.appendChild(button);

  button.addEventListener('click', deleteToDo)
  
  // append li to the existing ul
	toDoList.appendChild(li);
}

// event for form submission
function handleToDoSubmit(e) {
	e.preventDefault();

  // assign new to do and store in object with unique id
	const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo
  }

  // insert to do into to do list
  toDos.push(newToDoObj);
  
	paintToDo(newToDoObj);
  saveToDos();

  // reset input field
	toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

// display to do list on the page if any
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;

  parsedToDos.forEach(paintToDo);
}

