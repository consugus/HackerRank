//Input

//  Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase00-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
console.log("contenido:\n" + contenido);     // display the response


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
    for(var i = 0 ; i <= queriesNum ; i++){
        var arr = contenido[i+2].split(" ").map( x => parseInt(x) );
        console.log("arr: " + arr);
    };

    console.log(balancedSums(arr));
};


function balancedSums(arr) {

    return "Hola que tal";
}
