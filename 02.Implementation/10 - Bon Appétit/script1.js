//Input
var n = 4;
var k = 1;
var ar = [3, 10, 2, 9];
var b = 7;

// var n = 4;
// var k = 1;
// var ar = [3, 10, 2, 9];
// var b = 7;

//Solution

function bonAppetit(n, k, b, ar){
    var solution = "Bon Appetit";
    var totalBill = 0;
    var totalBillAnna = 0;
    for (var i = 0 ; i < n ; i++){
        totalBill += ar[i]
    };
    totalBillAnna = (totalBill-ar[k])/2;
    console.log("total Bill: " + totalBill + "    totalBillAnna: " + totalBillAnna + "    charged to Anna: " + b);
    if (totalBillAnna != b){
        solution = ar[k]/2;
    }
    return solution;
}



var retorno = bonAppetit(n, k, b, ar);
