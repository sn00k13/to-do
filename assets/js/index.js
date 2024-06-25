const add = document.getElementById("add-btn");
const addNew = document.getElementById("add-new");
const addList = document.getElementById("form-button");
const showList = document.getElementById("list");

add.addEventListener("click", () => {
    addNew.style.display = "inline-block";
});

addList.addEventListener("click", () => {
    showList.style.display = "flex"
});