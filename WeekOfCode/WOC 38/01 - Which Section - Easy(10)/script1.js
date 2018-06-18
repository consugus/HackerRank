//Input
var firstLine = "1", secondLine =  [["470 143 5", "11 24 420 6 9"]]; // 3
// var firstLine = "1", secondLine =  [["132 13 3", "9 109 14"]]; // 2
// var firstLine = "1", secondLine =  [["132 113 9", "50 39 15 4 2 10 3 3 6"]]; // 6
// var firstLine = "2", secondLine =  [["470 143 5", "11 24 420 6 9"], ["132 13 3", "9 109 14"]]; // 3 2


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
    var len = a.length,  totalPupils = 0;
    var section = 0, i = 0;
    // console.log("n: " + n + "\tk: " + k + "\t\tlen: " + len+ "\ta: " + a );

    while(totalPupils <= n){
        // console.log(i + "\ta[" + i + "]: " + a[i]+ "\ttotalPupils: " + totalPupils);

        totalPupils += a[i];
        i++;

        if(totalPupils >= k){
            section = i;
            break;
        };
    };

    return section;
}
