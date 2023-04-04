let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push  ('froot loops');
shoppingList[4] = 'fair trade coffee';
shoppingList[2] = 'rice';
shoppingList[3] = 'beans';
let shoppingCart = [];
shoppingCart.unshift(shoppingList.pop());
shoppingCart.unshift(shoppingList.shift());
while (shoppingList.length > 0 ){
    shoppingCart.unshift(shoppingList.pop());
}
shoppingCart.reverse(shoppingCart.sort());

console.log(shoppingList);
console.log(shoppingCart.toString());
