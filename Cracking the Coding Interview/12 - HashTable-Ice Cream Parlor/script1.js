//Input

//NOTE: after you press the run button, it gives a message saying that:
//"No sample test-cases for this question. Please test your code against
// custom input."
//You have to check the "Test against custom input" checkbox, copy the sample
//input and finally press the SUBMIT CODE button
//Works OK!!!!

var money = 4;
var n = 5;
var arr = [1,4,5,3,2];

// var money = 4;
// var n = 4;
// var arr = [2, 2, 4, 3];

//Solution
function eval(money, n, arr){
    var hash = new Array(n+2);

    for (var i = 0 ; i < n ; i++){
        var index = arr[i];
        if( (hash[money-index] != undefined)   ){
            console.log( (hash[money-index]+1)  + " " + (i+1) );
            break;
        }
        if(hash[index] == undefined){
            hash[index] = i;
        };
    };

    return "Hola";
};



retorno = eval(money, n, arr);

