//Input
var firstLine = "hackerhappy"; var secondLine = "hackerrank"; var thirdLine = "9"; // YES
// var firstLine = "aba"; var secondLine = "aba"; var thirdLine = "7"; // YES
// var firstLine = "ashley"; var secondLine = "ash"; var thirdLine = "2"; // No

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var s = firstLine; var t = secondLine;
    var k = parseInt(thirdLine);

    console.log(appendAndDelete(s, t, k));
    return "Hola";
};


function appendAndDelete(s, t, k) {
    //console.log("s: " + s + "\tt: " + t + "\tk: " + k + "\n\n");
    var common  = 0;

    for(var i = 0 ; i < (Math.min(s.length, t.length))  ; i++){
        //console.log("s[" + i + "]: " + s[i] + "t[" + i + "]: " + t[i]);
        if(s[i] != t[i]){
            break;
        };
        common = i;
    };
    //console.log("common: " + common + "\ts.length: " + s.length + "\tt.length: " + t.length + "\n\n");

    if( (s.length + t.length - 2 - 2*common) > k ){
        return "No";
    } else if( (s.length + t.length - 2*common)%2 == k%2 ){
        return "Yes";
    } else if( (s.length + t.length - k) < 0 ){
        return "Yes";
    } else{
        return "No";
    };
};


