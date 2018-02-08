//Input
var board1 = ["########", "#k#P####", "########", "########", "########", "########", "#K######", "########"];
//var board1 = ["####Q###", "###P####", "##k#####", "########", "########", "########", "#K######", "########"];
var board2 = ["########", "######P#", "####k###", "########", "########", "########", "####K###", "########"];

//console.log(getIndexOfP(board1[1]) );

retorno = eval(board2);

//Solution
function eval(board){

    if(rPXInSameRow(board)){
        return 4;
    };

    if(rPBInSameDiag(board)){
        return 4;
    };

    var promoteR = seeIfRChecks(board); // torre (Rook) **Done**
    var promoteB = seeIfBChecks(board); // alfil (Bishop) **Done**
    var promoteN = seeIfNChecks(board); // caballo (Knigth) **Done**
    var promoteQ = seeIfQCheks(promoteB, promoteR); //reina (Queen) **Done**

    return promoteQ + promoteR + promoteB + promoteN;
    //return "Hola";
};



function rPBInSameDiag(board){

    var indexOfP = getIndexOfP(board);
    var ascendingDiag = board[0][indexOfP + 1];
    var descendigDiag = board[0][indexOfP - 1];

    // console.log("Original Position of Pawn: board[" + 1 + "][" + indexOfP + "]");
    // console.log("ascendingDiag: " + ascendingDiag + "    descendingDiag: " + descendigDiag);
    // console.log("\n");

    for(var i = 2 ; i < 8 ; i ++){
        //console.log("i: " + i);

        if((indexOfP - i + 1) >= 0 ){
            //console.log("board[" + i + "][" + (indexOfP - i + 1) + "]: " + board[i][indexOfP - i + 1]);
            if( board[i][indexOfP - i + 1] == "Q" ||
                    board[i][indexOfP - i + 1] == "B" ||
                        board[i][indexOfP - i + 1] == "k"){
                ascendingDiag += board[i][indexOfP - i + 1];
            };
        };

        if( (indexOfP + i - 1) < 8 ){
            //console.log("board[" + i + "][" + (indexOfP + i - 1) + "]: " + board[i][indexOfP + i - 1]);
            if( board[i][indexOfP + i - 1] == "Q" ||
                    board[i][indexOfP + i - 1] == "B" ||
                        board[i][indexOfP + i - 1] == "k" ){
                descendigDiag += board[i][indexOfP + i - 1];
            };
        };
    };

    //console.log("ascendingDiag: " + ascendingDiag + "    descendingDiag: " + descendigDiag);

    if(ascendingDiag.indexOf("Bk") > -1 || ascendingDiag.indexOf("Qk") > -1 ){
        return true;
    };

    if(descendigDiag.indexOf("Bk") > -1 || descendigDiag.indexOf("Qk") > -1 ){
        return true
    };
    return false;
};

function rPXInSameRow(board){
    var line = board[1];
    //line = "#k#P#RR#";
    //console.log(line);
    var directWay = "";
    var reverseWay = "";
    for(var i = 0 ; i < line.length ; i++){
        if( (line[i] == "k") || (line[i] == "P") || (line[i] == "Q") || (line[i] == "R") ){
            //console.log("i: "+ i + "    " + line[i] + "   " + line[7-i]);
            directWay += line[i];
        };
    };

    for(var i = line.length ; i > 0  ; i--){
        if( (line[i] == "k") || (line[i] == "P") || (line[i] == "Q") || (line[i] == "R") ){
            //console.log("i: "+ i + "    " + line[i] + "   " + line[7-i]);
            reverseWay += line[i];
        };
    };


    if(directWay.indexOf("RPk") > -1 ||
        directWay.indexOf("QPk") > -1 ||
        directWay.indexOf("kPR") > -1 ||
        directWay.indexOf("kPQ") > -1){
        return true;
    };

    if(reverseWay.indexOf("kPR") > -1 ||
        reverseWay.indexOf("kPQ") > -1 ||
        reverseWay.indexOf("RPk") > -1 ||
        reverseWay.indexOf("QPk") > -1){
        return true
    };
    //console.log("directWay: " + directWay + "    reverseWay: " + reverseWay);
    return false;
};

function seeIfRChecks(board){
    var indexOfP = getIndexOfP(board);
    var answer = 0;
    //see if k is in same row
    for(var i = 0 ; i < 8 ; i++){
        if(board[0][i] == "k"){
            answer = 1;
            break;
        };
    };

    //see if k is in same column
    for(var i = 0 ; i < 8 ; i++){
        if(board[i][indexOfP] == "k"){
            answer = 1;
            break;
        };
    };

    return answer;
};

function seeIfBChecks(board){
    var indexOfP = getIndexOfP(board);
    var answer = 0;
    for(var i = 0 ; i < 8 ; i++){
        //console.log("i: " + i);
        if((indexOfP - i) >= 0 ){
            //console.log("indexOfP - " + i + ": " + (indexOfP - i) );
            //console.log("entró al primer if, " + "board[" + i + "][" + (indexOfP - i + "]:" + board[i][indexOfP - i]) );
            if(board[i][indexOfP - i] == "k"){
                answer = 1;
            };
        };

        if( (indexOfP + i) < 8 ){
            //console.log("indexOfP + " + i + ": " + (indexOfP + i) );
            //console.log("entró al segundo if, " + "board[" + i + "][" + (indexOfP + i + "]:" + board[i][indexOfP + i]) );
            if(board[i][indexOfP + i] == "k"){
                answer = 1;
            };
        };
    };

    return answer;
};

function seeIfNChecks(board){
    var indexOfP = getIndexOfP(board);
    var answer = 0;
    if(indexOfP >= 2){
        if(board[1][indexOfP - 2] == "k"){
            answer = 1;
        };
    };

    if(indexOfP >= 1){
        if(board[2][indexOfP - 1] == "k"){
            answer = 1;
        };
    };

    if(indexOfP <= 6){
        if(board[2][indexOfP + 1] == "k"){
            answer = 1;
        };
    };

    if(indexOfP <=5){
        if(board[1][indexOfP + 2] == "k"){
            answer = 1;
        };
    };


    return answer;
};

function seeIfQCheks(promoteB, promoteR){
    var answer = 0;
    if(promoteB || promoteR){
        answer = 1;
    };
    return answer;
};

function getIndexOfP(board){
    var indexOfP = 0;
    for(var i = 0 ; i < board.length ; i++){
        if(board[1][i] == "P" && board[0][i] == "#"){
            //console.log("indexOfP: " + i);
            indexOfP = i;
            break;
        };
    };
    return indexOfP;
};

