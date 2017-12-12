//Input
var n = 4;
var ar = [3, 2, 1, 3]; //Return 2



function birthdayCakeCandles(n, ar){


    ar.sort(function(a,b){return b-a});
    //ar.reverse();
    var maxValue = ar[0];
    count = 1;

    for (var i = 0 ; i < n ; i++){
        if(ar[i] == ar[i+1]){
            count ++;
        }
        else {
            break;
        }
    }
    return count;
}

var retorno = birthdayCakeCandles(n, ar);