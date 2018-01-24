//Input
// var n = 5;
// var k = 4;
// var arr = [1, 2, 3, 4, 5];

var n = 20;
var k = 10;
var arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
//             0   1   2  3   4   5  6   7   8   9  10  11  12  13 14  15  16  17  18  19
//Solution
function solve(n, k, arr){
    var B = "";
    for(i = 0 ; i < n ; i++)
        {
           if((k + i) < n){
                if(i == 0){
                    B = arr[k + i];
                }
                else{
                    B += " " + arr[k + i];
                }
           }
           else{
                B += " " + arr[(k+i) - n]
           }
        }
    return B;
}

var retorno = solve(n, k, arr);
