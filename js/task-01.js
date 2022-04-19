
const allCategories = document.querySelectorAll("h2").length;
console.log(`Number of categories: ${allCategories}`);

const categoryNameFirst = document.querySelector("#animals");

const listLenghthFirst = document.querySelectorAll(".item-animals").length;
console.log(`Category: ${categoryNameFirst.textContent} 
Elements: ${listLenghthFirst}`);

const categoryNameSecond = document.querySelector("#products");

const listLenghthSecond = document.querySelectorAll(".item-products").length;
console.log(`Category: ${categoryNameSecond.textContent} 
Elements: ${listLenghthSecond}`);

const categoryNameThird = document.querySelector("#technologies");

const listLenghthThird = document.querySelectorAll(".item-technologies").length;
console.log(`Category: ${categoryNameThird.textContent} 
Elements: ${listLenghthThird}`);
