//Input
var firstLine = "1"; var secondLine = "100";
var firstLine = "400"; var secondLine = "700";
// var firstLine = "1"; var secondLine = "10";

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var p = parseInt(firstLine);
    var q = parseInt(secondLine);
    console.log(kaprekarNumbers(p, q));
    return "Hola";
};


function kaprekarNumbers(p, q) {
    var str = "";

    for(var i = p ; i <= q ; i++){
        var tmp = Math.pow(i, 2).toString();
        var l = (tmp.length > 1) ? parseInt(tmp.slice(0, Math.floor(tmp.length/2))) : 0;
        var r = parseInt(tmp.slice( Math.floor(tmp.length/2), tmp.length));
        // console.log("i: " + i + "\ttmp: " + tmp + "\tl: " + l + "\tr: " + r);

        if( (l+r) == i ){
            if(str.length == 0){
                str += i.toString();
            } else{
                str += " " + i.toString();
            };
        };
    };

    if(str.length == 0){
        return "INVALID RANGE";
    } else{
        return str;
    };
}
