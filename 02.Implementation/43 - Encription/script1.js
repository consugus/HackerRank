//Input
var firstLine = "if man was meant to stay on the ground god would have given us roots";
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
// var firstLine = "haveaniceday"; // hae and via ecy
// var firstLine = "haveanice"; // hae and via ecy

// var firstLine = "feedthedog";  // fto ehg ee dd
// var firstLine = "chillout"; // clu hlt io
// var firstLine = "iffactsdontfittotheorychangethefacts"; // isieae fdtonf fotrga anoyec cttctt tfhhhs
                                                        // isieae fdtonf fotrga anoyec cttctt tfhhhs sieae
retorno = eval(firstLine);

//Solution
function eval(firstLine){
    console.log(encryption(firstLine));
    return "Hola";
};


function encryption(s) {
    var str = removeSpaces(s);
    // console.log("str: " + str + "\n\n");
    var encryptedText = "";
    var len = str.length, r = Math.floor(Math.sqrt(len)), c = Math.ceil(Math.sqrt(len));
    // console.log("len: " + len + "\t\trow: " + r + "\t\tcolumn: " + c );

    var rows = new Array(r+1);
    rows[0] = str.slice(0, c);
    // console.log(rows[0]);
    for(var i = 1 ; i <= r ; i++){
        rows[i] = str.slice(i*c, (i*c)+c);
        // console.log(rows[i]);
    };

    for(var i = 0 ; i < c ; i++){
        for(var j = 0 ; j <= r ; j++){
            if( rows[j][i] != undefined ){
                encryptedText += rows[j][i];
            };
            //console.log("c: " + i + "\tr: " + j);
        };
        encryptedText += " ";
    };

return encryptedText;
}

function removeSpaces(str){
    var strWithoutSpaces = "", len = str.length;
    for(var i = 0 ; i < len ; i++){
        if(str[i] != " "){
            strWithoutSpaces += str[i]
        };
    };
    return strWithoutSpaces;
};