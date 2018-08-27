//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "Test Cases/TestCase01 - Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
// console.log("contenido:\n" + contenido);     // display the response

//#region Asyncronous mode
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
    console.log(contenido + "\n\n");
    var n = 1; var queries = "";

    var lines = contenido.split("\n");
    var firstLine = lines[0].split(" ").map( x => parseInt(x));
    var n = firstLine[0]; var q = firstLine[1];
    console.log("n: " + n + "\tq: " + q + "\n\n");

    var queries = [];
    for(var i = 1 ; i <= q ; i++){
        var line = lines[i].split(" ").map( x => parseInt(x));
        queries.push(line);
    };

    var lastAnswers = dynamicArray(n, queries);
    for(var i = 0 ; i < lastAnswers.length ; i++){
        console.log(lastAnswers[i]);
    };
};


function dynamicArray(n, queries) {
    var lastAnswer = 0, len = queries.length;
    var lastAnswers = [];
    var seqList = new Array (n); console.log("seqList: " + seqList);
    for(var i = 0 ; i < n ; i++){
        seqList[i] = [];
    };

    for(var i = 0 ; i < len ; i++){
        switch(queries[i][0]){
            case 1: {
                // console.log("i: " + i + "\tconsulta 1");
                seqList[queries[i][1]].push(queries[i][2]);
                break;
            };
            case 2: {
                //console.log("i: " + i + "\tconsulta 2");
                var tmp = (queries[i][1] ^ lastAnswer) % 2;
                lastAnswer = seqList[tmp][seqList[tmp].length-1];
                // console.log("lastAnswer: " + lastAnswer);
                lastAnswers.push(lastAnswer);
                break;
            };
        };
    };

    return lastAnswers;
}



