//Input

// #region         Syncronous mode (deprecated)
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

var firstLine = "8", secondLine = "GAAATAAA"; // 5
// var firstLIne = "40", secondLine = "TGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGC" // 5

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){;
var gene = secondLine;

console.log(steadyGene(gene));
};


function steadyGene(gene) {
    var len = gene.length;
    var bases = new Array(4+1).join("0").split("").map( x => parseInt(x) ); // AGTC
    var count = 0;

    // console.log("bases: " + bases + "\tlen: " + len);

    var n = len/4, left = 0, rigth = len;
    console.log("gene: " + gene + "\tbases: " + bases + "\tn: " + n);

    for(var i = 0 ; i < len/2 ; i++){

        if(      gene[i] == "A" && bases[0] < n ){ bases[0]++; left++ }
        else if( gene[i] == "G" && bases[1] < n ){ bases[1]++; left++ }
        else if( gene[i] == "T" && bases[2] < n ){ bases[2]++; left++ }
        else if( gene[i] == "C" && bases[3] < n ){ bases[3]++; left++ };

        if(      gene[len-i-1] == "A" && bases[0] < n ){ bases[0]++; rigth-- }
        else if( gene[len-i-1] == "G" && bases[1] < n ){ bases[1]++; rigth-- }
        else if( gene[len-i-1] == "T" && bases[2] < n ){ bases[2]++; rigth-- }
        else if( gene[len-i-1] == "C" && bases[3] < n ){ bases[3]++; rigth-- };

    };


    console.log("gene: " + gene + "\tbases: " + bases + "\tn: " + n);
    for(var i = 0 ; i < len && rigth > 0 ; i++){

    };
    console.log("left: " + left + "\trigth: " + rigth);
    count = rigth - left + 1;

return count;
}
