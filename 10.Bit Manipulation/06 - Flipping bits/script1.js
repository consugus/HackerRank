//Input

// #region          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCaseA-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
// console.log("contenido:\n" + contenido);     // display the response
// #endregion

// #region         Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

retorno = eval(contenido);

//Solution
function eval(contenido){
    contenido = contenido.split("\n").map( x => parseInt(x) );
    var len = parseInt(contenido.shift());
    // console.log("queries: " + len + "\tcontenido: " + contenido);
    var queries = contenido;
    for(var i = 0 ; i < len ; i++){
        console.log(flippingBits(queries[i]));
    };

};


function flippingBits(N) {
    var biggestNumber = 0;
    for (var i = 0 ; i < 32 ; i++){
        biggestNumber += Math.pow(2,i);
    };

    return (biggestNumber-N);
}
