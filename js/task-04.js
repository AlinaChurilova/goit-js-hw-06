
const buttonDecr = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');
const buttonIcr = document.querySelector('[data-action="increment"]');

let count = 0;

// const removeClick = buttonDecr.addEventListener('click', () => counter.textContent--);
// const addClick = buttonIcr.addEventListener('click', () => counter.textContent++); 

const removeClick = buttonDecr.addEventListener('click', () => {
    count -= 1;
    return counter.textContent = count;
});

const addClick = buttonIcr.addEventListener('click', () => {
      count += 1;
    return counter.textContent = count;
});










