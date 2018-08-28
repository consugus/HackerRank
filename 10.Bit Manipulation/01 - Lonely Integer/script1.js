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

var firstLine = 1, secondLine = "1"; // 1
var firstLine = 3, secondLine = "1 1 2"; // 1 1 2
var firstLine = 5, secondLine = "0 0 1 2 1"; // 0 0 1 2 1

retorno = evaluate(firstLine, secondLine);

//Solution
function evaluate(firstLine, secondLine){
    var a = secondLine.split(" ").map( x => parseInt(x) );

    console.log(lonelyinteger(a));
};


function lonelyinteger(a) {
    a.sort(function(a, b){ return a-b });
    var len = a.length;
    var lonInt = -1;
    // var tmp = new Array(len+1).join("0").split("").map( x => parseInt(x) ); console.log("tmp: " + tmp)
    var i = 0;
    while(len --){
        // console.log("a: " + a)
        if(a[0] == a[1]){
            a.shift();
            a.shift();
        } else{
            lonInt = a[0];
            break;
        };
        // console.log("a: " + a)
    };

    return lonInt;
}
