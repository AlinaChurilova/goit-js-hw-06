
const buttonDecr = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');
const buttonIcr = document.querySelector('[data-action="increment"]');

const removeClick = buttonDecr.addEventListener('click', () => counter.textContent--);
const addClick = buttonIcr.addEventListener('click', () => counter.textContent++); 














