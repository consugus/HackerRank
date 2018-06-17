//Input
var firstLine = "6"; var secondLine = "7 1 3 4 1 7"; // 3
var firstLine = "5"; var secondLine = "1 2 3 4 10"; // -1

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x) );

    console.log(minimumDistances(a));
    return "Hola";
};


function minimumDistances(a) {
    var len = a.length;
    var minDist = Number.MAX_SAFE_INTEGER;
    var hashA = [];

    for(var i = 0 ; i < len ; i++){
        if(hashA[a[i]] == undefined   || hashA[a[i]] == -1 ){
            hashA[a[i]] = i;
        }   else{
            if( Math.abs( hashA[a[i]] - i) < minDist ){
                minDist =  Math.abs( hashA[a[i]] - i);
            };
        };
    };

    return  (minDist == Number.MAX_SAFE_INTEGER) ? -1: minDist
}
