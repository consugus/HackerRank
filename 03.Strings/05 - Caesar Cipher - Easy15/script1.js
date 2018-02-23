//Input
var n = 11; var s = "middle-Outz"; var k = 2; // okffng-Qwvb
//var n = 1; var s = "t"; var k = 2; // b

retorno = caesarCipher(n, s, k);

//Solution
function caesarCipher(n, s, k){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = "";

    for(var i = 0 ; i < s.length ; i++){
        if( isLower(s[i]) ){
            cipher += encrypt(s[i], alphabet, k);
        } else if( isUpper(s[i]) ){
            cipher += encrypt(s[i], ALPHABET, k);

        } else{
            cipher += s[i];
        };
    };
    return cipher;
};



function isLower(char){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var answer = false;
    for(var i = 0 ; i < alphabet.length ; i++){
        if(char == alphabet[i]){
            answer = true;
            break;
        };
    };
    return answer;
};

function isUpper(char){
    var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var answer = false;
    for(var i = 0 ; i < ALPHABET.length ; i++){
        if(char == ALPHABET[i]){
            answer = true;
            break;
        };
    };
    return answer;
};

function encrypt(char, aLpHaBeT, k){
    answer = "";
    for(var i = 0 ; i < aLpHaBeT.length ; i++){
        if(char == aLpHaBeT[i]){
            if( (i+(k%26)) < aLpHaBeT.length ){
                answer = aLpHaBeT[ Math.abs(i + (k % 26) ) ];
                //console.log("aLpHaBeT[" + i + "]: " + aLpHaBeT[i] + "  -->"  + "aLpHaBeT[ (" + i + " + ("  + k + "%26) - 26) ]: " + aLpHaBeT[ Math.abs(i + (k%26) )]);
            } else{
                answer = aLpHaBeT[ Math.abs(i + (k % 26) -26) ];
            };
        };
    };
    return answer;
};



