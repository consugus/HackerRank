//Input
var firstLine = "aba"; var secondLine = "10"; // 7

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var s = firstLine;
    var n = parseInt(secondLine);

    console.log(repeatedString(s, n));
    return "Hola";
};


function repeatedString(s, n) {
    var count = 0, len = s.length, total = 0;;
    for(var i = 0 ; i < len ; i++){
        if(s[i] === "a"){
            count++
        };
    };
    total = count * Math.floor(n/len);
    for(var i = 0 ; i < n%len ; i++){
        if(s[i] === "a"){
            total++;
        };
    };

    return total;
}
