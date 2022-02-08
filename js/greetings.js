// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

// function onLogInBtnClick() {
// 	const username = loginInput.value;

// 	console.log(username);
// }

// loginButton.addEventListener('click', onLogInBtnClick);

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
	e.preventDefault();

	const username = loginInput.value;

	loginForm.classList.add(HIDDEN_CLASSNAME);

	localStorage.setItem(USERNAME_KEY, username);

	paintGreetings(username);
}

function paintGreetings(name) {
	greeting.innerText = `Hello, ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername)
}