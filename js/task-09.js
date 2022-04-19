function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");


button.addEventListener('click', () => span.style.backgroundColor = getRandomHexColor());
