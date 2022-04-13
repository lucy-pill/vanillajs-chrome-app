const IMAGES = [
  '0.10bd3fac.jpg',
  '1.dc197a9a.jpg',
  '2.3ca6bb44.jpg'
];

const min = Math.ceil(0);
const max = Math.floor(IMAGES.length);
const index  = Math.floor(Math.random() * (max - min) + min);

const bgImage = document.createElement('IMG');
bgImage.src = `/${IMAGES[index]}`;
bgImage.alt = 'Can not loaded image.';
document.body.appendChild(bgImage);