//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase01-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
// console.log("contenido:\n" + contenido);     // display the response


//#region          Asyncronous mode
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
    "use stritc";
    contenido = contenido.split("\n");
    let queriesNum = parseInt(contenido[0]);
    const queries = new Array(2);
    var len = contenido.length;
    for(var i = 1 ; i < len ; i+=3){
        var m = contenido[i], arr = contenido[i+2].split(" ").map( x => parseInt(x) );
        console.log(icecreamParlor(m, arr));
    };
};

function icecreamParlor(m, arr) {
    var indexes = [0,0], len = arr.length;

    let flavor1 = 0, flavor2 = 0
    for(var i = 0 ; i < len - 1 ; i++){ // flavor 1
        for( var j = i + 1 ; j < len ; j++){ // flavor 2
            if( (arr[i] + arr[j]) == m){
                flavor1 = i + 1 ; flavor2 = j + 1;
            };
        };
    };

    return flavor1 + " " +  flavor2;
}
