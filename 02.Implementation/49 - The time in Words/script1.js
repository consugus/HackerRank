//Input
var firstLine = "5", secondLine = "47"; // thirteen minutes to six
// var firstLine = "3", secondLine = "00"; // three o' clock
// var firstLine = "7", secondLine = "15"; // quarter past seven

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var h = parseInt(firstLine), m = parseInt(secondLine);

    console.log(timeInWords(h, m));
    return "Hola";
};


function timeInWords(h, m) {
    //h = 12, m = 59;
    //console.log(h + ":" + m + "\n\n");
    var str = "";
    var num = ["o' clock", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eigth", "twenty nine", "half"];

    if(m == 0){
        str = num[h] + " " + num[0];
    } else if (m == 15){
        str = num[m] + " past " + num[h];
    } else if(m == 45 && h != 12){
        str = num[m-30] + " to " + num[h+1];
    } else if(m == 30){
        str = num[m] + " past " + num[h];
    } else if(h == 12 && m > 30 && m != 45 && m != 59){
        str = num[60 - m] + " minutes to one";
    } else if(h == 12 && m > 30 && m != 45 && m == 59){
        str = num[60 - m] + " minute to one";
    } else if( h == 12 && m == 45){
        str = num[15] + " to one";
    } else if(h != 12 && m > 30 && m != 59){
        str = num[60-m] + " minutes to " + num[h+1];
    } else if(h != 12 && m > 30 && m == 59){
        str = num[60-m] + " minute to " + num[h+1];
    } else if (m == 1){
        str = num[m] + " minute past " + num[h];
    } else {
        str = num[m] + " minutes past " + num[h];
    };

    return str;
}
