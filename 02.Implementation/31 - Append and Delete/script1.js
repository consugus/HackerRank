//Input
var firstLine = "hackerhappy"; var secondLine = "hackerrank"; var thirdLine = "9"; // YES
// var firstLIne = "aba"; var secondLine = "aba"; var thirdLine = "7"; // YES
// var firstLIne = "ashley"; var secondLine = "ash"; var thirdLine = "2"; // No

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var s = firstLine; var t = secondLine;
    var k = parseInt(thirdLine);

    console.log(appendAndDelete(s, t, k));
    return "Hola";
};


function appendAndDelete(s, t, k) {
    console.log("s: " + s + "\tt: " + t + "\tk: " + k + "\n\n");
    var common  = 0;
    var firstIteration;
    if(s.length < t.length){
        firstIteration = s.length;
    } else{
        firstIteration = t.length;
    };

    for(var i = 0 ; i < firstIteration ; i++){
        //console.log("s[" + i + "]: " + s[i] + "t[" + i + "]: " + t[i]);
        if(s[i] != t[i]){
            break;
        };
        common = i;
    };
    console.log("common: " + common + "\ts.length: " + s.length + "\tt.length: " + t.length + "\n\n");

}


