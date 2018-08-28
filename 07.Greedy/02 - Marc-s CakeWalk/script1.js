//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCaseB-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
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
    var calorie = contenido[1].split(" ").map( x => parseInt(x) );

    console.log(marcsCakewalk(calorie));
};


function marcsCakewalk(calorie) {

    calorie.sort(function(a,b){ return b-a });

    var miles = 0, len = calorie.length;
    for(var i = 0 ; i < len ; i++){
        miles += (Math.pow(2,i))*calorie[i];
    };

    return miles;
}
