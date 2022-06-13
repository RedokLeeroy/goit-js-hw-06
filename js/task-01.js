const showCategories = document.querySelectorAll(".item"
);
console.log(`Number of categories:${showCategories.length}`);

showCategories.forEach(element => {
    const elemName =element.querySelector("h2");
    const elemLength = element.querySelectorAll("li");
    console.log(`Category: ${elemName.textContent}`);
    console.log(`Elements: ${elemLength.length}`);
});
