//Input
// var firstLine = "4 0"; var secondLine = "4 4"; var thirdLine = []; // 9
// var firstLine = "5 3"; var secondLine = "4 3"; var thirdLine = [[5, 5], [4, 2], [2, 3]]; // 10
var firstLine = "5 3"; var secondLine = "4 3"; var thirdLine = [[5, 5], [4, 2], [2, 3]]; // 10
// var firstLine = "1 0"; var secondLine = "1 1"; var thirdLine = []; // 0
var firstLine = "100000 0"; var secondLine = "4187 5068"; var thirdLine = []; // 308369


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
    var posAttacked = 0;
    var hashObstacles = new Array; // ((n*n) + 1);

    for(var i = 0 ; i < obstacles.length ; i++){
        var loc = createHash(n, obstacles[i][0], obstacles[i][1]);
        hashObstacles[loc] = 1;
    };

    posAttacked += upForwards(   n, k, r_q, c_q, hashObstacles);
    posAttacked += upBackwards(  n, k, r_q, c_q, hashObstacles);
    posAttacked += downForwards( n, k, r_q, c_q, hashObstacles);
    posAttacked += downBackwards(n, k, r_q, c_q, hashObstacles);
    posAttacked += rowForwards(  n, k, r_q, c_q, hashObstacles);
    posAttacked += rowBackwards( n, k, r_q, c_q, hashObstacles);
    posAttacked += colUp(        n, k, r_q, c_q, hashObstacles);
    posAttacked += colDown(      n, k, r_q, c_q, hashObstacles);

    return posAttacked;
}

function createHash(n, row, col){
    var tempRow = "", tempCol = "";

    if(row.toString().length < n.toString().length){
        for(var i = 0 ; i < (n.toString().length - row.toString().length) ; i++){
            tempRow += "0";
        };
    };
    tempRow += row.toString();

    if(col.toString().length < n.toString().length){
        for(var i = 0 ; i < (n.toString().length - col.toString().length) ; i++){
            tempCol += "0";
        };
    };
    tempCol += col.toString();

    // console.log( tempRow.toString() + tempCol.toString() );
    return parseInt(tempRow.toString() + tempCol.toString());
};

function upForwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q+i) > n || (c_q+i) > n ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q + i), (c_q + i) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function upBackwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q+i) > n || (c_q-i) < 1 ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q + i), (c_q - i) ) ] === 1){
            break;
        };
        count++
    };
    return count;
};

function downForwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q-i) < 1 || (c_q+i) > n ){ //(r_q+i) > n || (c_q+i) > n || (r_q-i) < 1 || (c_q-i) < 1
            break;
        };

        if( hashObstacles[createHash( n, (r_q - i), (c_q + i) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function downBackwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q-i) < 1 || (c_q-i) < 1 ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q - i), (c_q - i) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function rowForwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (c_q+i) > n ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q), (c_q + i) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function rowBackwards(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (c_q-i) < 1 ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q), (c_q - i) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function colUp(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q+i) > n ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q + i), (c_q) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};

function colDown(n, k, r_q, c_q, hashObstacles){
    var count = 0;
    for(var i = 1 ; i < n ; i++){
        if( (r_q-i) < 1 ){
            break;
        };

        if( hashObstacles[createHash( n, (r_q - i), (c_q) ) ] === 1){
            break;
        };
        count++;
    };
    return count;
};