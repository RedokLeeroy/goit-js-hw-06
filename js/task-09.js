function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector( "body"
);

const changecol = document.querySelector( ".change-color"
);

const span = document.querySelector( ".color"
);

changecol.addEventListener("click", () => {
   bodyEl.style.backgroundColor = getRandomHexColor();
   span.textContent = getRandomHexColor(); 
});