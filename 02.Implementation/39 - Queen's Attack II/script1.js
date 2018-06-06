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
    var positionsAttacked = 0;

    positionsAttacked += upForwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += downForwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += upBackwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += downBackwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += rowForwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += rowBackwards(n, k, r_q, c_q, obstacles);
    positionsAttacked += colUp(n, k, r_q, c_q, obstacles);
    positionsAttacked += colDown(n, k, r_q, c_q, obstacles);

    return positionsAttacked;
}

function upForwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function upBackwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function downForwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function downBackwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function rowForwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function rowBackwards(n, k, r_q, c_q, obstacles){

    return 1;
};

function colUp(n, k, r_q, c_q, obstacles){

    return 1;
};

function colDown(n, k, r_q, c_q, obstacles){    return 1;};