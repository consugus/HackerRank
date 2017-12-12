//Input
var n = 6;
var ar = [-4, 3, -9, 0, 4, 1]


function plusMinus(n, ar){
    var positives = 0;
    var negatives = 0;
    var zeros = 0;

    for (var i = 0 ; i < n ; i++){
        if (ar[i] > 0){
            positives ++
        }
        if (ar[i] == 0){
            zeros ++
        }
        if (ar[i] < 0){
            negatives ++
        }
    }
    return (positives/n).toFixed(6) + "\n" +
           (negatives/n).toFixed(6) + "\n" +
           (zeros/n).toFixed(6)
}

var retorno = plusMinus(n, ar);









