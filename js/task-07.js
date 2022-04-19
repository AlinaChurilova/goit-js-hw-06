const slider = document.querySelector("#font-size-control");
const spanValue = document.querySelector("#text");

slider.addEventListener('input', () => spanValue.style.fontSize = slider.value+'px')