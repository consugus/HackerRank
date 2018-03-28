//Input
var q = 3;                          // 1 <= q <= 20
var arr = ["aaab", "baa", "aaa"];   // 1 <= | s[i] | <= 10.000 + 5
// 3,0, -1

var q = 1;
var arr = ["quyjjdcgsvvsgcdjjyq"];

// var q = 10;
// var arr = ["quyjjdcgsvvsgcdjjyq", "hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh", "fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf", "bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb", "fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf", "mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm", "tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt", "lhrxvssvxrhl", "prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp", "kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk"];
//1, 8, 33, 23, 25, 44, 20, -1, 14, -1

retorno = eval(q, arr);

//Solution
function eval(q, arr){
    for(var i = 0 ; i < q ; i++){
        console.log(palindromeIndex(arr[i]));
    };
};




function palindromeIndex(s){
    var index = -1;
    var indexLow, indexHigh, len = s.length;

    var indexes = isPalindrome(s);

    //if(  !(indexes[0] == 0 && indexes[1] == 0) ){
        indexLow = indexes[0];
        indexHigh = indexes[1];

        var strWithLow  = s.slice(0, indexLow) + s.slice(indexLow + 1, len);
        var strWithHigh = s.slice(0, indexHigh)  + s.slice(indexHigh + 1, len);

        var secondIndexes = isPalindrome(strWithLow);
        if(secondIndexes[0] == 0 && secondIndexes[1] == 0){
            index = indexLow;
        } else{
            index = indexHigh;
        };
    //};
    return index;
};

function isPalindrome(s){
    var len = s.length;
    var indexes = [0, 0];
    for(var i = 0 ; i < len ; i++){
        if(s[i] != s[len-i-1]){
            indexes[0] = i;
            indexes[1] = len-i-1;
        };
        break;
    };
    return indexes;
};



