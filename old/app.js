const h1 = document.querySelector('.hello h1');

function handleClick() {
	h1.classList.toggle('clicked');

}

h1.addEventListener('click', handleClick);

// const h1 = document.querySelector('.hello h1');

// function handleClick() {
//   const clickedClass = 'clicked'

// 	if (h1.classList.contains(clickedClass)) {
// 		h1.classList.remove(clickedClass);
// 	} else {
// 		h1.classList.add(clickedClass);
// 	}
// }

// h1.addEventListener('click', handleClick);

// const h1 = document.querySelector('.hello h1');

// function handleClick() {
// 	const currentColor = h1.style.color;
// 	let newColor;

// 	if (currentColor === 'tomato') {
// 		newColor = 'blue';
// 	} else {
// 		newColor = 'tomato';
// 	}

// 	h1.style.color = newColor;
// }

// function handleMouseEnter() {
// 	h1.innerText = 'Mouse is here';
// }

// h1.addEventListener('click', handleClick);

// function handleMouseLeave() {
// 	h1.innerText = 'Mouse is gone';
// }

// function handleWindowResize() {
// 	document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
// 	alert('copier!');
// }

// function handleWindowOffline() {
// 	alert('SOS no WIFI!');
// }

// function handleWindowOnline() {
// 	alert('All good!');
// }

// h1.addEventListener('mouseenter', handleMouseEnter);
// h1.addEventListener('mouseleave', handleMouseLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);
// window.addEventListener('line', handleWindowOnline);
