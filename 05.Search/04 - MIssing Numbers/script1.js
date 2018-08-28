//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase00-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
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

retorno = eval(contenido);

//Solution
function eval(contenido){
    contenido = contenido.split("\n");
    // console.log("contenido:\n" + contenido);
    let arr = contenido[1].split(" ").map( x => parseInt(x) );
    let brr = contenido[3].split(" ").map( x => parseInt(x) );

    console.log(missingNumbers(arr, brr));
};


function missingNumbers(arr, brr) {

    var plusA = 0, plusB = 0, missing = [], i = 0;;
    var len = Math.max(arr.length, brr.length);

    // finding max and min of brr (the longest)
    var max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
    for(var i = 0 ; i < brr.length ; i++){
        if(brr[i] > max){ max = brr[i] };
        if(brr[i] < min){ min = brr[i] };
    };

    var diff = new Array (max-min+2).join("0").split("").map( x => parseInt(x) );

    for(var i = 0 ; i < brr.length ; i++){
        diff[brr[i] - min]++;
    };


    for(var i = 0 ; i < arr.length ; i++){
        diff[arr[i] - min]--;
    };

    var missing = [];
    for(var i = 0 ; i < diff.length ; i++){
        if(diff[i] != 0){
            missing.push(i + min);
        };
    };

    return missing;
}

