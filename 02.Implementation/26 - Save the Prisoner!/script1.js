//Input
var firstLine = "2"; var secondLine = ["5 2 1", "5 2 2"]; // 2 3
var firstLine = "12"; var secondLine = ["352926151 380324688 94730870", "94431605 679262176 5284458", "208526924 756265725 150817879", "962975336 972576181 396355184", "464237185 937820284 255816794", "649320641 742902564 647542323", "174512033 711706897 68977959", "107283902 156676511 67149447", "104513201 298399273 96292548", "113378824 274011418 98103763", "934815799 991959468 212396037", "88325121 435452998 24617705"];
// 122129406 23525398 72975907 405956028 265162707 91803604 82636723 9258153 81152217 31978708 269539705 18445097
// var firstLine = "1"; var secondLine = ["5 2 1"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var queriesNumber = parseInt(firstLine);
    for(var i = 0 ; i < queriesNumber ; i++){
        var tmp = secondLine[i];
        var nms = tmp.split(" ").map( x => parseInt(x));
        var n = nms[0], m = nms[1]; s = nms[2];
        //console.log(i + "- " + saveThePrisoner(n, m, s));
        console.log(saveThePrisoner(n, m, s));
    };

    return "Hola";
};


function saveThePrisoner(n, m, s) {
    var warn = 0;
    // console.log("n: " + n + "\tm: " + m + "\ts: " + s);
    if((s + m -1) < n){
        warn = s + m - 1;
    } else if ((s + m - 1) % n == 0){
        warn = n;
    } else{
        warn = ((s + m - 1) % n)
    };
    return warn;
}
