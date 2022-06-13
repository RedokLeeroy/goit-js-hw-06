const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEL = document.querySelector(
"#ingredients");

const listEL = ingredients.map(element => {
const item = document.createElement("li")
item.textContent = `${element}`;
item.classList.add("item");

return item;
});

ingredientsEL.append(...listEL)
