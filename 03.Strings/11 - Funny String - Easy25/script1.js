//Input
var t = 2;
var s = ["acxz", "bcxz"] // Funny, Not Funny

var t = 1;
var s = ["uvzxrumuztyqyvpnji"]; //bcxz

var t = 10;
var s = [
    "ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq", 
    "holtm", 
    "uvzxrumuztyqyvpnji", 
    "tmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw", 
    "wxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv", 
    "yrzxrxskrtlpwpmtpxvowrxrpxq", 
    "pryumtuntmovpwvowslj", 
    "nosklrxrtyuxtmnurzsryuxtywqwqpxts", 
    "fmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury",     "jkmsxzwrxzy"
];

retorno = eval(t, s);

//Solution
function eval(t, s){
    for (var i = 0 ; i < t ;  i++){
        console.log(funnyString(s[i]));
    };
    return "Hola";
};

function funnyString(s){
    var r = reverse(s);

    //console.log("s: " + s + "\nr: " + r + "\n\n");
    var answer = "Funny";
    var absDiffDirect = 0;
    var absDiffReverse = 0;
    for(var i = 0 ; i < s.length - 1 ; i++){

        //console.log("s[" + i + "]: " + s[i] + "    index of " + s[i] + ": " + getIndex(s[i]) + "            s[" + (i+1) + "]: " + s[(i+1)] + "    index of " + s[(i+1)] + ": " + getIndex(s[i+1]));
        //console.log("index of " + s[i] + ": " + getIndex(s[i]) + "    index of " + s[i+1] + ": " + getIndex(s[i+1]));
        absDiffDirect = Math.abs(getIndex(s[i]) - getIndex(s[(i+1)]) );

        //console.log("r[" + i + "]: " + r[i] + "    index of " + r[i] + ": " + getIndex(r[i]) + "            r[" + (i+1) + "]: " + r[(i+1)] + "    index of " + r[(i+1)] + ": " + getIndex(r[i+1]));
        //console.log("index of " + r[i] + ": " + getIndex(r[i]) + "    index of " + r[i+1] + ": " + getIndex(r[i+1]));
        absDiffReverse = Math.abs(getIndex(r[i]) - getIndex(r[(i+1)]) );

        //console.log("absDiffDirect: " + absDiffDirect + "    absDiffReverse: " + absDiffReverse + "\n\n");

        if( absDiffDirect != absDiffReverse ){
            answer = "Not Funny";
            break;
        };
    };
    return answer;
};

function reverse(str){
    var strReversed = "";
    for(var i = 0 ; i < str.length ; i++){
        strReversed += str[(str.length -i -1)];
    };
    return strReversed;
};

function getIndex(char){
    var index = -1;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0 ; i < alphabet.length ; i++){
        if(char == alphabet[i]){
            index = i;
            break;
        };
    };
    return index;
};
