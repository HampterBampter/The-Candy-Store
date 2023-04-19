initializedCart = function () {
    if (localStorage.getItem("cart") == null) {
        let cart = [];
        let cartString = JSON.stringify(cart);
        localStorage.setItem("cart", cartString);
    }
}

addItem = function (item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

removeItem = function (item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.removeItem(item);
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

displayCart = function () {
    let cart = localStorage.getItem("cart");
    console.log(cart);
}

let submitButton = function (event) {
    event.preventDefault();
    let itemName = document.getElementById("itemName").value;
    let itemPrice = document.getElementById("itemPrice").value;
    addItems = { itemName, itemPrice };
}

let addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", submitButton);

let displayCartButton = document.getElementById("displayCartButton");
displayCartButton.addEventListener("click", displayCart);


