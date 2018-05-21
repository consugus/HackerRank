//Input
var firstLine = "5 4"; var secondLine = "1 6 3 5 2"; // 2
// var firstLine = "5 7"; var secondLine = "2 5 4 5 2"; // 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0]; var k = nk[1];
    var height = secondLine.split(" "). map( x => parseInt(x) );
    console.log(hurdleRace(k, height));
    return "Hola";
};


function hurdleRace(k, height) {
    var doses = 0;
    height.sort( (a,b) => b-a );
    if((height[0] -k) > 0 ){
        doses = height[0] - k;
    };
    return doses;
}
