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
    // console.log(contenido + "\n\n");
    var n = 1; var queries = "";

    var lines = contenido.split("\n");
    var firstLine = lines[0].split(" ").map( x => parseInt(x));
    var n = firstLine[0]; var q = firstLine[1];
    // console.log("n: " + n + "\tq: " + q + "\n\n");

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

    var sequences = new Array (n);
    var lastAnswers = [];
    for(var i = 0 ; i < n ; i++){
        sequences[i]  = [];
    };
    var lastAns = 0;

    for(var i = 0; i < queries.length; i++) {
        var [type, idx, value] = queries[i];

        var sequenceIdx = (idx ^ lastAns) % n;
        var sequence = sequences[sequenceIdx];

        switch(type){
            case 1: {
                sequence.push(value);
                break;
            };
            case 2: {
                var elementIdx = value % sequence.length;
                lastAns = sequence[elementIdx];
                lastAnswers.push(lastAns);

                break;
            };
        };
    };
    return lastAnswers;
};


