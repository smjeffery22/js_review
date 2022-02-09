const imgs = [
  'baseball_0.jpeg',
  'baseball_1.jpeg',
  'baseball_2.jpeg'
]

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement('img');

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);