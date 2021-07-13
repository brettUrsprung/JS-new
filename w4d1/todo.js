let newLi = document.createElement("li");
newLi.innerHTML = "Item 2";
let list = document.getElementById("todoList");
list.appendChild(newLi)

let button = document.getElementById("add");
function addItem(){
    let newItem = document.createElement("li");
    newItem.innerHTML = newList.value;
    todoList.appendChild(newItem);
    newList.value = "";
}
button.addEventListener("click", addItem);

