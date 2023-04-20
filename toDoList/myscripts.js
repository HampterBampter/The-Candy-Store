let addItem = function(){
    let toDoList = document.getElementById("toDoList");
    let listItem = document.getElementById("listItem").value;
    document.getElementById("listItem").value = "";
    let newListItem = document.createElement("li");
    newListItem.textContent = listItem
    toDoList.appendChild(newListItem);
}
let remove = function(event){
    forRemoval = event.target;
    if (forRemoval.matches("li")){
    forRemoval.remove();
    }
};

toDoList.addEventListener("click", remove);


let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addItem);


