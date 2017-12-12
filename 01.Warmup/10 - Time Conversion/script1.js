//Input
var s1 = "01:05:45AM";
var s2 = "07:05:45PM";
var s3 = "12:00:00AM";
var s4 = "12:00:00PM";

function timeConversion(s){
    var hh = s.slice(0,2);
    var mm = s.slice(3,5);
    var ss = s.slice (6,8);
    var ampm = s.slice(8,10);

    if(ampm == "AM" && hh == 12){
        console.log("entró en el if de AM");
        hh = "00";
    }
     else if (ampm == "PM" && Number(hh) < 12){
        hh = Number(hh) + 12;
    }

    return hh + ":" + mm + ":" + ss;
}

var retorno = timeConversion(s3);









