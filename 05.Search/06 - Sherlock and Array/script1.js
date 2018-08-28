//Input

//  Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase02-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
// console.log("contenido:\n" + contenido);     // display the response


// #region         Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

retorno = evaluate(contenido);

//Solution
function evaluate(contenido){
    "use strict";
    var arr = 0
    contenido = contenido.split("\n");
    var queriesNum = parseInt(contenido[0]);

    //for(var i = 1 ; i <= queriesNum ; i++){
    for(var i = 1 ; i <= queriesNum ; i++){
        var arr = contenido[(i*2)].split(" ").map( x => parseInt(x) );
        console.log(balancedSums(arr));
    };
};


function balancedSums(arr) {
    // console.log("arr: " + arr);
    var sumLeft = 0, sumRigth = 0, len = arr.length, isBalanced = "NO";
    if(len == 0){
        return "YES";
    };
    for(var i = 1 ; i < len ; i++){
        sumRigth += arr[i];
    };
    if(sumLeft == sumRigth){
        return "YES";
    };

    var index = 0;

    for(var i = 1 ; i < len ; i++){
        sumLeft += arr[i-1];
        sumRigth -= arr[i];
        // console.log("sumLeft: " + sumLeft + "\tsumRigth: " + sumRigth);
        if(sumLeft == sumRigth){
            isBalanced = "YES";
            index = i;
            // console.log("sumLeft: " + sumLeft + "\tsumRigth: " + sumRigth + "\tindex: " + index);
            break;
        };
    };

    return isBalanced;
}
