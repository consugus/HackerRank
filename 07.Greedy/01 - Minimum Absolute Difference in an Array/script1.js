//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCaseC-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
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
    contenido = contenido.split("\n");
    arr = contenido[1].split(" ").map( x => parseInt(x));

    console.log(minimumAbsoluteDifference(arr));
};


function minimumAbsoluteDifference(arr) {
    
    arr.sort(function(a,b){ return a-b });
    var len = arr.length;
    var minDiff = Number.MAX_SAFE_INTEGER;
    for(var i = 0 ; i < len - 1 ; i++){
        if(Math.abs(arr[i] - arr[i + 1]) < minDiff ){
            minDiff = Math.abs(arr[i] - arr[i + 1]);
        };
    };

    return minDiff;
}
