let fruitInventory = new Map([
    ['apple', 10],
    ['banana', 20],
    ['orange', 30],
]
);
fruitInventory.set('apple', 15);
let bananaInventory = fruitInventory.get('banana');
//console.log(bananaInventory);

let colors = ['red', 'blue', 'green']
let uniqueColors = new Set(colors);
uniqueColors.add('yellow');

let hasBlue = (uniqueColors.has('blue'));
//console.log(hasBlue);

