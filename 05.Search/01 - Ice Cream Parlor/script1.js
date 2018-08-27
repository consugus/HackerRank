//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase00-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
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
    // console.log("contenido:\n" + contenido);
    let queriesNum = parseInt(contenido[0]);
    const queries = new Array(2);
    // console.log("queries: " + queries);
    for(var i = 1 ; i < contenido.length ; i+=3){
        var m = contenido[i], arr = contenido[i+2];
        console.log(icecreamParlor(m, arr));
    };
};

function icecreamParlor(m, arr) {
    console.log("money: " + m + "\tflavors: " + arr);
    var indexes = "0", len = arr.length;

    for(var i = 0 ; i < len ; i++){

    };

    return indexes;
}
