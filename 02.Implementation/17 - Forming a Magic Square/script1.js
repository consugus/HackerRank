//Input
var firstLine = "5 3 4"; var secondLine = "1 5 8"; var thirdLine = "6 4 2"; // 7
var firstLine = "4 9 2"; var secondLine = "3 5 7"; var thirdLine = "8 1 5"; // 1
var firstLine = "4 8 2"; var secondLine = "4 5 7"; var thirdLine = "6 1 6"; // 4

var firstLine = "4 4 7"; var secondLine = "3 1 5"; var thirdLine = "1 7 9"; // 20
var firstLine = "2 2 7"; var secondLine = "8 6 4"; var thirdLine = "1 2 9"; // 16
var firstLine = "7 2 9"; var secondLine = "6 6 2"; var thirdLine = "5 1 2"; // 19
var firstLine = "9 3 3"; var secondLine = "3 3 2"; var thirdLine = "1 8 1"; // 18

retorno = eval(firstLine, secondLine, thirdLine);

// the "Magic Constant" is calculated as [n * (n^2 + 1)] / 2. In the case of an 3x3
//matrix, this is (3 * 10) / 2 = 15.
// In every case of an 3x3 matrix, number 5 is at the (1, 1) position (the middle)
// In every case of an 3x3 matrix, one of the diagonals is [8, 5, 2] and the other
// is [6, 5, 4]




//Solution
function eval(firstLine, secondLine, thirdLine){
    var s = [];
    var tmp = firstLine.split(" "). map( x => parseInt(x)); s.push(tmp);
    var tmp = secondLine.split(" "). map( x => parseInt(x)); s.push(tmp);
    var tmp = thirdLine.split(" "). map( x => parseInt(x)); s.push(tmp);

    console.log(formingMagicSquare(s));
    return "Hola"
};

function formingMagicSquare(s){
    var diff = new Array(8+1).join("0").split("").map(parseInt); diff[1] = 0;

    // #region Original and rotations
    var original = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];
    diff[0] = calculateDiff(original, s);

    var mRot1 = rotateMatrix(original);

    var mRot2 = rotateMatrix(mRot1);
    diff[1] = calculateDiff(mRot2, s);
    // #endregion

    // #region Transposed and rotations
    var mTransp = transposeMatrix(original);
    diff[2] = calculateDiff(mTransp, s);

    var mTranspRot1 = rotateMatrix(mTransp);

    var mTranspRot2 = rotateMatrix(mTranspRot1);
    diff[3] = calculateDiff(mTranspRot2, s);
    // #endregion

    // #region inverted and rotations
    var mInv = invertMatrix(original);
    diff[4] = calculateDiff(mInv, s);

    var mInvRot1 = rotateMatrix(mInv);

    var mInvRot2 = rotateMatrix(mInvRot1);
    diff[5] = calculateDiff(mInvRot2, s);
    // #endregion

    // #region Transposed + Inverted and rotations
    var mTI = invertMatrix(mTransp);
    diff[6] = calculateDiff(mTI, s);

    var mTIRot1 = rotateMatrix(mTI);

    var mTIRot2 = rotateMatrix(mTIRot1);
    diff[7] = calculateDiff(mTIRot2, s);
    // #endregion

    var minDiff = diff[0];
    var pos = 0;
    for(var i = 1 ; i < diff.length ; i++){
        if(diff[i] < minDiff){
            minDiff = diff[i];
            pos = i;
        };
    };

    return minDiff;
};

function rotateMatrix(m){
    var mRotated = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    mRotated[0][0] = m[1][0];
    mRotated[0][1] = m[0][0];
    mRotated[0][2] = m[0][1];
    mRotated[1][0] = m[2][0];
    mRotated[1][1] = m[1][1];
    mRotated[1][2] = m[0][2];
    mRotated[2][0] = m[2][1];
    mRotated[2][1] = m[2][2];
    mRotated[2][2] = m[1][2];

    return mRotated;
};

function transposeMatrix(m){
    var mTransposed = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    mTransposed[0][0] = m[0][0];
    mTransposed[0][1] = m[1][0];
    mTransposed[0][2] = m[2][0];
    mTransposed[1][0] = m[0][1];
    mTransposed[1][1] = m[1][1];
    mTransposed[1][2] = m[2][1];
    mTransposed[2][0] = m[0][2];
    mTransposed[2][1] = m[1][2];
    mTransposed[2][2] = m[2][2];

    return mTransposed;
};

function invertMatrix(m){
    var mInverted = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    mInverted[0][0] = m[2][2];
    mInverted[0][1] = m[2][1];
    mInverted[0][2] = m[2][0];
    mInverted[1][0] = m[1][2];
    mInverted[1][1] = m[1][1];
    mInverted[1][2] = m[1][0];
    mInverted[2][0] = m[0][2];
    mInverted[2][1] = m[0][1];
    mInverted[2][2] = m[0][0];

    return mInverted;
};

function calculateDiff(m1, m2){
    var len = 3;
    var diff = 0;
    for(var i = 0 ; i < len ; i++){
        for(var j = 0 ; j < len ; j++){
            diff += Math.abs(m1[i][j] - m2[i][j]);
        };
    };
    return diff;
};

