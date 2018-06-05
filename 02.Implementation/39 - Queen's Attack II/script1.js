//Input
var firstLine = "4 0"; var secondLine = "4 4"; var thirdLine = []; // 9
// var firstLine = "5 3"; var secondLine = "4 3"; var thirdLine = [[5, 5], [4, 2], [2, 3]]; // 10
// var firstLine = "1 0"; var secondLine = "1 1"; var thirdLine = []; // 0

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0]; var k = nk[1];
    var r_qC_q = secondLine.split(" ").map( x => parseInt(x) );
    var r_q = r_qC_q[0]; var c_q = r_qC_q[1];
    var obstacles = thirdLine;

    console.log(queensAttack(n, k, r_q, c_q, obstacles));

    return "Hola";
};


function queensAttack(n, k, r_q, c_q, obstacles) {
    var positionsAttacked = 10;

    return positionsAttacked;
}
