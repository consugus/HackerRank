//Input
var n = 5;
var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(n, ar){
    var result = 0;
    for (var i = 0 ; i < ar.length ; i++){
        result += ar[i];
    }
    return result;
}

var retorno = aVeryBigSum(n, ar);









