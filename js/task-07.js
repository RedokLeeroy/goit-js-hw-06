const sizeEl = document.querySelector( "#font-size-control"
);

const spanEl = document.querySelector( "#text"
);
spanEl.style.fontSize = `${sizeEl.value}px`
sizeEl.addEventListener("input", () =>{ 
     spanEl.style.fontSize = `${sizeEl.value}px`
});