const buttonELdec = document.querySelector("[data-action= 'decrement']"
);
const buttonELinc = document.querySelector("[data-action= 'increment']"
);

let span = document.querySelector( "#value"
);

let counterValue = 0;

buttonELdec.addEventListener("click", () => {
counterValue -= 1;
return span.textContent = counterValue;
});

buttonELinc.addEventListener("click", () => {
 counterValue += 1;
return span.textContent = counterValue;
});


