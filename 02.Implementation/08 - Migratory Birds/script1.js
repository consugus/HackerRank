//Input
var n = 8;
var ar = [1, 4, 4, 4, 5, 3, 5, 5];

//Solution

function migratoryBirds(n, ar){
    //Initializes both arrays with zeroes
    var birdTypeFrecuency = Array(n).fill(0);

    for(var i = 0 ; i < n ; i++){
        birdTypeFrecuency[ar[i]]++;
    };

    var maxVal = birdTypeFrecuency[1], index = 1;
    for(var i = 2 ; i < n ; i++){
        if(birdTypeFrecuency[i] > maxVal){
            maxVal = birdTypeFrecuency[i];
            index = i;
        }
    }


    return index;
}




var retorno = migratoryBirds(n, ar);
