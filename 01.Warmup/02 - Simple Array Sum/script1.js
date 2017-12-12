var len = 6;
var arr = [1, 2, 3, 4, 10, 11];


function simpleArraySum(n, ar){
    var result = 0;
    for (var i = 0 ; i < n ; i++){
        result += ar[i];
    }
    return result;
}

var retorno = simpleArraySum(len, arr);


// var retorno = (function (){
//     var result = 0;
//     console.log("result: " + result + "    lenght: " + len + "    array: " + arr);
//     for (var i = 0 ; i < len ; i++){
//         result += arr[i];
//         console.log("i: " + i + "    result: " + result);
//     }
//     return result;
// })();






