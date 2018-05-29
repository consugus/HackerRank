//Input
var firstLIne = "hackerhappy"; var secondLine = "hackerrank"; var thirdLine = "9"; // YES
// var firstLIne = "aba"; var secondLine = "aba"; var thirdLine = "7"; // YES
// var firstLIne = "ashley"; var secondLine = "ash"; var thirdLine = "2"; // No

retorno = eval(firstLIne, secondLine, thirdLine);

//Solution
function eval(firstLIne, secondLine, thirdLine){
    var s = firstLIne; var t = secondLine;
    var k = parseInt(thirdLine);

    console.log(appendAndDelete(s, t, k));
    return "Hola";
};


function appendAndDelete(s, t, k) {
    console.log("s: " + s + "\tt: " + t + "\tk: " + k);


}


