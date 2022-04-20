
const allItems = document.querySelectorAll(".item");

const allCategories = document.querySelectorAll("h2").length;
console.log(`Number of categories: ${allCategories}`);


allItems.forEach((item) => {
    
    const categoryName = item.querySelector("h2").textContent;
    const listLength = item.querySelectorAll("li").length;

    
    return console.log(`Category: ${categoryName }
    Elements: ${listLength}`);
 
});


