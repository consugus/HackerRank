//Input
var firstLine = "if man was meant to stay on the ground god would have given us roots";
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
// var firstLine = "haveaniceday"; // hae and via ecy
// var firstLine = "feedthedog";  // fto ehg ee dd
// var firstLine = "chillout"; // clu hlt io

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    console.log(encryption(firstLine));
    return "Hola";
};


function encryption(s) {
    var str = removeSpaces(s);
    console.log("str: " + str + "\n\n");
    var encryptedText = "";
    var len = str.length;
    console.log("len: " + len + "\trow: " + Math.floor(Math.sqrt(len)) + "\tcolumn: " + Math.ceil(Math.sqrt(len) ) );

    for(){
        
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