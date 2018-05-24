//Input
var firstLine = "2"; var secondLine = [["4 3", "-1 -3 4 2"], ["4 2", "0 -1 2 1"]];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var testCases = parseInt(firstLine);
    for(var i = 0 ; i < testCases ; i++){
        var nk = secondLine[i][0].split(" ").map( x => parseInt(x)); // console.log("nk: " + nk);
        var n = nk[0]; var k = nk[1]; // console.log("n:" + n + "    k: " + k);
        var a = secondLine[i][1].split(" ").map( x => parseInt(x));// console.log("a: " + a + "\n\n");
        console.log(angryProfessor(k, a));
    };

};


function angryProfessor(k, a) {
    var count = 0, len = a.length;
    for(var i = 0 ; i < len ; i++){
        if(a[i] <= 0){
            count++;
        };
        if(count >= k){
            return "NO";
        };
    };
    return "YES";
}
