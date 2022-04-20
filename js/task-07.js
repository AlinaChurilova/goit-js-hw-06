const slider = document.querySelector("#font-size-control");
const spanValue = document.querySelector("#text");
spanValue.style.fontSize = slider.value + 'px';
slider.addEventListener('input', () => spanValue.style.fontSize = slider.value+'px')