const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const ingredientsRefs = ingredients.map(ingredient => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  console.log(itemRef);
  return itemRef;

});

list.append(...ingredientsRefs);






