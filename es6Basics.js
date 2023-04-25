let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6 ,7, 8];
let numbers = [...numbers1, ...numbers2];

let square = (number) => {
    return number * number
} 

let squares = numbers.map(square)


let isEven = (number) => {
    return number % 2 == 0
}

let evenSquares = squares.filter(isEven);

let [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`numbers: ${numbers}`)
console.log(`squares: ${squares}`)
console.log(`evenSquares: ${evenSquares}`)
console.log(`firstEvenSquare: ${firstEvenSquare}`)
console.log(`secondEvenSquare: ${secondEvenSquare}`)
