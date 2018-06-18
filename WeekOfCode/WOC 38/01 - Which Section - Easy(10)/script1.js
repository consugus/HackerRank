//Input
var firstLine = "1", secondLine =  [["470 143 5", "11 24 420 6 9"]] ;

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var nkm = secondLine[i][0].split(" ").map( x => parseInt(x));
        var n = nkm[0], k = nkm[1], m = nkm[2];
        var a = secondLine[i][1].split(" ").map( x => parseInt(x) );
        console.log(whichSection(n, k, a));
    };

    return "Hola";
};


function whichSection(n, k, a) {
    // Return the section number you will be assigned to assuming you are student
    // number k.
    var len = a.length, section = -1;
    console.log("n: " + n + "\tk: " + k + "\t\tlen: " + len+ "\ta: " + a );

    return section;
}
