const validationEl = document.querySelector( "#validation-input"
);
const validationLength = validationEl.getAttribute("data-length")


validationEl.addEventListener("blur", () =>{ 
if (validationEl.value.length === Number(validationLength)) {
    validationEl.classList.remove("invalid");
    validationEl.classList.add("valid");
}
else {
    validationEl.classList.remove("valid");
    validationEl.classList.add("invalid");
}
});