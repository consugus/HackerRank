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

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x) );
    
    console.log(anotherMinimaxProblem(a));
};


function anotherMinimaxProblem(a) {


    return "Hola";
}
