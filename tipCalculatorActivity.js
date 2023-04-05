let bill = [20.20];
function calculateTip(a){
    return 'Bill: $'+ (a * 1).toFixed(2) +' + tip: $'+ (a * .20).toFixed(2);
}
console.log(calculateTip(bill));


let getBillTotal = calculateTip;
console.log(getBillTotal(36))