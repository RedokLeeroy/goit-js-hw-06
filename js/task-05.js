const inputEl = document.querySelector( "#name-input"
);
const outputEl = document.querySelector( "#name-output"
);



inputEl.addEventListener("input", () => {
return inputEl.value !== "" ? outputEl.innerHTML = inputEl.value: outputEl.innerHTML = "Anonymous";
});