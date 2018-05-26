//Input
var firstLine = "3 2 2"; var secondLine = "3, 4, 5"; var thirdLine = "1 2";
// [4, 5, 3]  --> 5 3
var firstLine = "3 2 3"; var secondLine = "1 2 3"; var thirdLine = "0 1 2"; 
// [2 3 1] --> 2 3 1


retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var nkq = firstLine.split(" ").map( x => parseInt(x));
    var n = nkq[0]; var k = nkq[1]; var q = nkq[2];
    var a = secondLine.split(" ").map( x => parseInt(x));
    var m = thirdLine.split(" ").map( x => parseInt(x));
    // console.log("n: " + n + "\tk: " + k + "\tq: " + q + "\ta: " + a + "\tm: " + m);

    console.log(circularArrayRotation(a, k, m));

    return "Hola";
};


function circularArrayRotation(a, k, m) {
    var len = a.length;
    var aRotated = new Array(len);
    var aToShow = [];
    for(var i = 0 ; i < len ; i++){
        aRotated[i] = 0;
    };
    // console.log("aRotated: " + aRotated);

    for(var i = 0 ; i < len ; i++){
        if( (i + k) <= len ){
            aRotated[i] = a[i + k - 1];
        } else{
            aRotated[i] = a[i-(len%k) - 1];
        };
    };
    // console.log("aRotated: " + aRotated);

    var len2 = m.length;
    for(var i = 0 ; i < len2 ; i++){
        aToShow.push(aRotated[ m[i] ] );
    };

    return aToShow;
}
