//Input
var s = 7;
var t = 11;
var a = 5;
var b = 15;
var m = 3;
var n = 2;
var apple = [-2, 2, 1];
var orange = [5, -6];


//Solution

function applesAndOranges(s, t, a, b, m, n, apples, oranges){
    var solution = [0, 0];

    //equals for (var i = 0 ; i < 3 ; i++)
    for (var i = 0 ; i < m ; i++){
        if ((a + apples[i]) >= s &&
            (a + apples[i]) <= t){
                solution[0] ++;
        }
    }

    for (var i = 0 ; i < n ; i++){
        if ((b + oranges[i]) >= s &&
            (b + oranges[i]) <= t){
                solution[1] ++;
        }
    }
    return solution;
}


var retorno = applesAndOranges(s, t, a, b, m, n, apple, orange);
