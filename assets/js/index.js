const add = document.getElementById("add-btn");
const addNew = document.getElementById("add-new");
const addList = document.getElementById("form-button");
const showList = document.getElementById("list");
const delList = document.getElementById("del-btn");
const editList = document.getElementById("edit-btn")

const checkInput = document.createElement("INPUT");
const textInput = document.createElement("p");
const node = document.createTextNode("Item 1")

add.addEventListener("click", () => {
    addNew.style.display = "inline-block";
});

addList.addEventListener("click", () => {
    showList.style.display = "flex";
    checkInput.style.display = "block"
    checkInput.setAttribute("type", "checkbox");
    textInput.appendChild(node);
    showList.appendChild(checkInput);
    showList.appendChild(textInput);
});

delList.addEventListener("click", () => {
    textInput.remove("p");
    checkInput.style.display = "none"
});

editList.addEventListener("click", () => {
    addNew.style.display = "inline-block";
});