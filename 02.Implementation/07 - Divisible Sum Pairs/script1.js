//Input
var n = 6;
var k = 3;
var ar = [1, 3, 2, 6, 1, 2]

//Solution

function divisibleSumPairs(n, k, ar){

    var result = 0;
    ar = ar.map(Number);

    for(var i = 0 ; i < n ; i++){
        result += findPairs(i, n, k, ar);
    }
    return result;
}

function findPairs(i, n, k, ar){
    count = 0;
    for(var j = i + 1 ; j < n ; j++){
        //if(ar[i] < ar[j]){
            if((ar[i] + ar[j]) % k === 0){
                count++;
            }
        //}
        //sconsole.log("ar[" + i + "]: " + ar[i] + "    ar[" + j + "]: " + ar[j] + "    ar[" + i + "] + ar[" + j + "]: " + (ar[i]+ ar[j]) + "    module by "+ k + ": "  + (ar[i]+ ar[j]) % k);
    }
    return count;
}


var retorno = divisibleSumPairs(n, k, ar);
