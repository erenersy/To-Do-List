let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

addToDoButton.addEventListener("click", () => {

    if (inputText.value.trim() === "") return;

    let paragraph = document.createElement("div");
    paragraph.classList.add("list-group-item", "list-group-item-action", "rounded-pill", "mb-2", "text-center");
    toDoContainer.prepend(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.style.cursor = "pointer"

    paragraph.addEventListener("click", () => {

        paragraph.classList.toggle("text-decoration-line-through");

    })

    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph);
    })

    clearToDo.addEventListener("click", () => {
        paragraph.remove();
    })

})


