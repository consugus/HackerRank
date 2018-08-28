//Input

// #region          Syncronous mode (deprecated)
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

var firstLine = 10, secondLine = 15;

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var l = firstLine, r = secondLine;

    console.log(maximizingXor(l, r));
};


function maximizingXor(l, r) {
    // console.log("l: " + l + "\tr: " + r);
    var maxXor = Number.MIN_SAFE_INTEGER;

    for(var i = l; i <= r ; i++){
        for(var j = l ; j <= r ; j++){
            // console.log(i ^ j);
            if( (i ^ j) > maxXor ){
                maxXor = (i ^ j);
            };
        };
    };

    return maxXor;
}
