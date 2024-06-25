const add = document.getElementById("add-btn");
const addNew = document.getElementById("add-new");
const addList = document.getElementById("form-button");
const showList = document.getElementById("list");
const delList = document.getElementById("del-btn");
const editList = document.getElementById("edit-btn")

const checkInput = document.createElement("INPUT");
const textInput = document.createElement("p");
const node = document.createTextNode("Item 1")

checkInput.checked = false;

add.addEventListener("click", () => {
    addNew.style.display = "inline-block";
});

addList.addEventListener("click", () => {
    if (checkInput.checked == true)
    showList.style.display = "flex";
    checkInput.style.display = "block"
    checkInput.setAttribute("type", "checkbox");
    textInput.appendChild(node);
    showList.appendChild(checkInput);
    showList.appendChild(textInput);
});

delList.addEventListener("click", () => {
    if (checkInput.checked == true) {
        textInput.remove("p");
        checkInput.style.display = "none"
    } else {
        alert("No items are checked")
    }
});

editList.addEventListener("click", () => {
    addNew.style.display = "inline-block";
});