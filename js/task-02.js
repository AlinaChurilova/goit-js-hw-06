const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstIngr = document.createElement("li");
firstIngr.textContent = "Potatoes";
firstIngr.classList.add("item");

console.log(firstIngr);


const secondIngr = document.createElement("li");
secondIngr.textContent = "Mushrooms";
secondIngr.classList.add("item");

console.log(secondIngr);


const thirdIngr = document.createElement("li");
thirdIngr.textContent = "Garlic";
thirdIngr.classList.add("item");

console.log(thirdIngr);

const fourthIngr = document.createElement("li");
fourthIngr.textContent = "Tomatos";
fourthIngr.classList.add("item");

console.log(fourthIngr);

const fifthIngr = document.createElement("li");
fifthIngr.textContent = "Herbs";
fifthIngr.classList.add("item");

console.log(fifthIngr);

const sixthIngr = document.createElement("li");
sixthIngr.textContent = "Condiments";
sixthIngr.classList.add("item");

console.log(sixthIngr);

const list = document.querySelector("#ingredients");

list.append(fifthIngr, secondIngr, thirdIngr, fourthIngr, fifthIngr, sixthIngr);