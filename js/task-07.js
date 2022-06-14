const sizeEl = document.querySelector( "#font-size-control"
);

const spanEl = document.querySelector( "#text"
);

sizeEl.addEventListener("input", () =>{ 
     spanEl.style.fontSize = `${sizeEl.value}px`
});