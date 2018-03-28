//Input
var q = 3;                          // 1 <= q <= 20
var arr = ["aaab", "baa", "aaa"];   // 1 <= | s[i] | <= 10.000 + 5
// 3,0, -1

var q = 1;
var arr = ["hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh"];

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
    //console.log("s: " + s + "\n\n");
    var index = -1;
    var len = s.length;
    for(var i = 0 ; i < len/2 ; i++){
        //console.log("s[" + i + "]: " + s[i] + "    s[" + (len-i-1) + "]: " + s[len-i-1]);
        if(s[i] != s[len-i-1]){
            //console.log(s[i+1] == s[len-i-1]);
            if(s[i+1] == s[len-i-1]){
                index = i;
                //console.log("index: " + index + "    i: " + i);
            } else{
                index = (len-i-1);
                //console.log("index: " + index + "   len-i-1: " + (len-i-1) );
            };
            break;
        };
    };
    return index;
};