//Input

// #region         Syncronous mode (deprecated)
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// var contenido = archivoTxt.responseText;
// console.log("contenido: " + contenido);     // display the response
// #endregion

// #region          Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

var firstLine = "4", secondLine = "1 2 3 4";
var firstLine = "3", secondLine = "1 2 3";
// var firstLine = "5", secondLine = "12 8 9 11 14";

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x) );

    console.log(anotherMinimaxProblem(a));
};


function anotherMinimaxProblem(a) {
    var len = a.length;

    (len%2 == 0) ? a.sort(function(a, b){return a-b}) : a.sort(function(a, b){return b-a});

    console.log("a: " + a + "\tlen: "+ len + "\n\n");
    var tempA = [];
    var solutionA = [];

    for(var i = 0 ; i < len/2 ; i++){
        tempA.push(a[len-i-1]);

        if(len%2 == 0){
            tempA.push(a[i]);
        } else{
            if( (len-i-1) != i ){
                tempA.push(a[i]);
            };
        };
    };

    console.log("tempA: " + tempA + "\n\n");
    var max = Number.MIN_SAFE_INTEGER;
    for(var i = 0 ; i < Math.floor(len -1) ; i++){
        if( (tempA[i] ^ tempA[i+1]) > max){
            max = tempA[i] ^ tempA[i+1];
        };
        console.log("i: " + i + "\ttempA[" + i + "]: " + tempA[i] + " XOR " + "tempA[" + (i+1) + "]: " + tempA[i+1] + "\tmax: " + max);
    };

    return max;
};


