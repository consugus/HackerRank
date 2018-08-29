//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCaseA-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var content = archivoTxt.responseText;
// console.log("content: " + content);     // display the response

// #region         Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

var A = []; A.push(0);
retorno = eval(content);

//Solution
function eval(content){
    content = content.split("\n");
    var queries = content.shift();
    // console.log("queries: " + queries + "\tcontent: " + content);
    for(var i = 0 ; i < queries ; i++){
        var lr = content[i].split(" ").map( x => parseInt(x) );
        var l = lr[0], r = lr[1];
        // console.log("l: " + l + "\tr: " + r);
        console.log(xorSequence(l, r));
    };
};



function xorSequence(l, r) {
    console.log("A.length: " + A.length);
    for(var i = 1 ; i <= r ; i++){
        A.push(A[i-1] ^ i);
    };

    var xorSum = 0;
    for(var i = l ; i <= r ; i++){
        if(i == l){
            xorSum = A[i] ^ A[i+1];
            i+=1;
        } else {
            xorSum = xorSum ^ A[i];
        };
    };

    return xorSum;
}
