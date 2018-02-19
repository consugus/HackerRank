//Input
// #region TestCase1
var n = 5; //                      0 < n <= 100, [number of racks]
var position = [1, 2, 3, 4, 5]; // 0 < x[i] <= 1000, [position of each rack]
var height   = [1, 1, 1, 1, 1]; //    0 < h[i] <= 1000, [height of each rack]
                                           // BOTH
//#endregion

// #region TestCase2
// var n = 5;
// var position = [1, 2, 3, 4, 8];
// var height   = [1, 1, 1, 1, 1];            // NONE
//#endregion

// #region TestCase3
// var n = 2;
// var position = [1, 4];
// var height   = [3, 2];                     // LEFT
//endregion

// #region TestCase4
// var n = 4;
// var position = [1, 2, 3, 5];
// var height   = [1, 10, 1, 2];              //BOTH
//#endregion

// #region TestCase5
// var n = 5;
// var position = [1, 2, 3, 8, 9];
// var height   = [1, 1, 1, 1, 1];           // NONE
//#endregion

// #region TestCase6
var n = 9;
var position = [1, 2, 3, 6, 7, 8, 9, 10, 12];
var height   = [1, 4, 1, 1, 1, 1, 1,  2,  1];   //LEFT
//#endregion

// #region TestCase7
// var n = 5;
// var position = [1, 2, 3, 4, 6];
// var height   = [1, 3, 1, 2, 1];               // LEFT
//#endregion

//Fails test cases 6 and 7


retorno = checkAll(n, position, height);

//Solution
function checkAll(n, position, height){
    var left = checkLeft(n, position, height);
    var rigth = false; // checkRight(n, position, height);
    var answer = "NONE";

    if(left && rigth){
        answer = "BOTH";
    } else if(left || rigth){
        if(left){
            answer = "LEFT";
        } else{
            answer = "RIGHT";
        };
    };
    return answer;
};


function checkLeft(n, position, height){
    //console.log("n: " + n + "    position: " + position + "    height: " + height + "\n\n");
    var answerLeft = false;
    var last = position[position.length-1];

    for(var i = 0 ; i < n ; i++){
        if(   !(position[i] + height[i] >= position[i+1])   ){
            break;
        };
        //console.log("position[" + i + "]: " + position[i] + " height[" + i + "]:" + height[i]);
        if(    (position[i] + height[i] >= last)     ){
            answerLeft = true;
            break;
        };
    };
    return answerLeft;
};

function checkRight(n, position, height){
    var answerRight = false;
    var first = position[0];

    for(var i = n - 1 ; i > 0 ; i--){
        if( !(position[i] - height[i] <= position[i-1]) ){
            break;
        };

        if(position[i] - height[i] <= first ){
            answerRight = true;
            break;
        };
    };
    return answerRight;
};