//Input
var s = "aaabccddd" // abc
//var s = "baab"  	// Empty String
//var s = "a";
//var s = "oagciicgaoyjmahhamjymmwjnnjwmmvpxhpphxpvlikappakilyygvkkvgyymlpfddfplmhiodvvdoihfxpkggkpxfuevvuuvveu"; // Empty String
//var s = "acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj"; // acdqgacdqj


retorno = super_reduced_string(s);

//Solution
function super_reduced_string(s){
    var str = s;
    var answer = "";
    var aux = "";

    for (var m = 0 ; m < s.length ; m++){
        for(j = 0 ; j < str.length ; j++){
            for (var i = 0 ; i < str.length ; i++){
                if(str[i] == str[i+1]){
                    i++
                } else{
                    aux += str[i];
                };
            };
            str = aux;
            aux = "";
        };
    };

    if(str == ""){
        answer = "Empty String";
    } else{
        answer = str;
    };
    return answer;
};



