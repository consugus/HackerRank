//Input

// #region          Syncronous mode (deprecated)
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// var contenido = archivoTxt.responseText;
// console.log("contenido: " + contenido);     // display the response
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

var firstLine = 4       // 4
// var firstLine = 5       // 2
// var firstLine = 10      // 4

retorno = eval(firstLine);

//Solution
function eval(firstLine){

    console.log(sumXor(parseInt(firstLine)));
};


function sumXor(n) {
    console.log("n: " + n)

    return "Hola"
}
