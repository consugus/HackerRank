//Input
var firstLine = "20 23 6"; // 2

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var ijk = firstLine.split(" ").map( x => parseInt(x));
    var i = ijk[0]; var j = ijk[1]; var k = ijk[2];
    console.log(beautifulDays(i, j, k));
    return "Hola";
};


function beautifulDays(start, end, k) {
    var count = 0;
    for(var i = start ; i <= end ; i++){
        var tmpDirect = i;
        var tmpReverse = reverseNumber(i);
        //console.log("\ntmpDirect: " + tmpDirect + "\ttmpReverse: " + tmpReverse + "\n\n");
        if(Math.abs(tmpDirect - tmpReverse)%k == 0){
            count++;
        };
    };
    return count;
}

function reverseNumber(x){
    var reversed = "";
    var len = x.toString().length;
    var str = x.toString();
    for(var i = 0 ; i <  len ; i++){
        reversed += str[len - i - 1];
    };
    var xReversed = parseInt(reversed);

    return xReversed;
};
