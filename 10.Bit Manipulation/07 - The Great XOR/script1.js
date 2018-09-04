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

var firstLine = "2", secondLine = ["2", "10"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    for(var i = 0 ; i < n ; i++){
        var x = parseInt(secondLine[i]);
        console.log(theGreatXor(x));
    };
};


function theGreatXor(x) {
    x = x.toString(2);
    var len = x.length;
    var notX = "";
    for(var i = 0 ; i < len ; i++){
        notX += ( x[i] == 1) ? 0 : 1;
    };

    return parseInt(notX, 2);
}
