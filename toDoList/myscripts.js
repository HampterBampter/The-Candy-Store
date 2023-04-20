let addItem = function(){
    let toDoList = document.getElementById("toDoList");
    let listItem = document.getElementById("listItem").value;
    listItem.value = "";
    let newList = document.createElement(listItem);
    toDoList.appendChild(newList);
}
let remove = function(forRemoval){
    if (forRemoval.matches("toDoList")){
    forRemoval.childElement.remove();
}
};

toDoList.addEventListener("click", remove);


let button = document.getElementById("button");
button.addEventListener("submit", addItem);


