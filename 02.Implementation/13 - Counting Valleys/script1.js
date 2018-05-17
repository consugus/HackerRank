//Input
var n = 8; var s = "UDDDUDUU"; // 1

retorno = eval(n, s);

//Solution
function eval(n, s){

    console.log(countingValleys(n, s));
    return "Hola";
};



function countingValleys(n, s){
    var altitude = 0;
    var valleys = 0;
    for(var i = 0 ; i < n ; i++){
        if(s[i] == "U"){
            altitude++;
        } else{
            altitude--;
        };
        if(altitude == 0 && s[i] == "U"){
            valleys++;
        };
    };

    return valleys;
};
