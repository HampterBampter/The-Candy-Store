function recursive(a, b){
    if (b !== 0) { 
        return a * recursive (a, b - 1);
    } 
    else {
        return 1;
    }
}
console.log(recursive(5, 4));