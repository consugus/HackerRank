//Input
var n = 3;
var ar = [ [11, 2, 4], [4, 5, 6], [10, 8, -12]]


function diagDifference(n, ar){
    var result = 0;
    var sumPrimaryDiag = 0;
    var sumSecondaryDiag = 0;

    for (var i = 0 ; i < n ; i++){
        sumPrimaryDiag += ar[i][i];
        sumSecondaryDiag += ar[i][(n-1)- i];
    }
    return Math.abs(sumPrimaryDiag-sumSecondaryDiag);
}

var retorno = diagDifference(n, ar);









