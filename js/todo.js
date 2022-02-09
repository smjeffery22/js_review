const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

	span.innerText = newToDo;
	button.innerText = '❌';

	li.appendChild(span);
	li.appendChild(button);

  button.addEventListener('click', deleteToDo)
  
	toDoList.appendChild(li);
}

function handleToDosubmit(e) {
	e.preventDefault();

	const newToDo = toDoInput.value;

  toDos.push(newToDo);
  
	paintToDo(newToDo);
  saveToDos();

	toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDosubmit);
