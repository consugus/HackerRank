//Input
var s = "3943";                                     // 3993             ok
var n = 4; // 0 <= m <= 100.000
var k = 1; // 0 <= m <= 100.000

// var s = "092282"; var n = 6; var k = 3;          // 992298           ok
// var s = "0011"; var n = 4; var k = 1;            // -1               ok
// var s = "323"; var n = 3; var k = 1;             // 393              ok
// var s = "5"; var n = 1; var k = 1;               // 9                ok
// var s = "123515333"; var n = 8; var k = 9;
// Anda perfectísimo para cualquier valor de k, desde 1 a 9
// var s = "11119111"; var n = 8; var k = 4         // 91199119         ok
//var s = "329"; var n = 3; var k = 2;              // 999              ok
// var s = "118"; var n = 3; var k = 1;             // 818              ok
// var s = "9711319"; var n = 7; var k = 4;         // 99111199         ok
// var s = "128392759430124"; var n = 15; var k = 8;// 929394959493929  ok

//No puedo evaluar los test cases que continuan fallando porque son entradas
//muy grandes y no puedo ver dónde estaría fallando. Se queda así...

retorno = eval(s, n, k);

//Solution
function eval(s, n, k){
    console.log(highestValuePalindrome(s, n, k));
    return "Hola";
};

function highestValuePalindrome(s, n, k){
    var changesCounter = 0;
    var len = s.length;
    var characters = new Array(len+1).join("0").split("").map(parseInt);
    if(len > 1){
        characters[1] = 0;
    };

    // console.log("s: " + s + "    k: " + k + "    s.length: " + len + "\n\n");
    // console.log("characters: " + characters);

    for(var i = 0 ; i < len/2 ; i++){
        //console.log("s[" + i + "]: " + s[i] + "    s[" + (len-i-1) + "]: " + s[len-i-1]);
        if(s[i] != s[len-i-1]){
            changesCounter++;
            if(s[i] > s[len-i-1]){
                characters[i] = s[i];
                characters[len-i-1] = s[i];
            } else{
                characters[i] = s[len-i-1];
                characters[len-i-1] = s[len-i-1];
            };
        } else{
            characters[i] = s[i];
            characters[len-i-1] = s[i];
        };
    };

    if(changesCounter > k){
        return -1;
    } else{// Here come the enhacementes
        for(var i = 0 ; i < len/2 ; i++){
            //if(( (s[i] != str[i]) || (s[len-i-1] != str[len-i-1]) ) && changesCounter < k ){
            if(   (   (s[i] != characters[i]) || (s[len-i-1] != characters[len-i-1]) ) && (changesCounter < k) ){
                if(characters[i] != 9){
                    characters[i] = 9;
                    characters[len-i-1] = 9;
                    changesCounter++;
                };
            };
        };
    };

    for(var i = 0 ; i < len/2 ; i++){
        if(  (k-changesCounter >=2) && characters[i] != 9  ){
            characters[i] = 9;
            characters[len-i-1] = 9;
            changesCounter +=2;
        };
    };

    // console.log( "(k-changesCounter) == 1: " + ((k-changesCounter) == 1) + "    (s.length%2) != 0:" + (s.length%2 != 0) );
    // console.log((k-changesCounter == 1) && (s.length%2 != 0));
    // console.log("length/2: "  + len/2 + "    characters[i]: " + characters[Math.floor(len/2)]);
    if( (k-changesCounter == 1) && (s.length%2 != 0) ){
        characters[(Math.floor(len/2))] = 9;
    };

    // Here I construct the answer since there's a solution
    var str = "";
    for(var i = 0 ; i < len ; i++){
        str += characters[i];
    };
    // console.log("characters: " + characters.toString());
    // console.log("k - changesCounter: " + (k - changesCounter) );
    // console.log("str: " + str);

    return str;
};