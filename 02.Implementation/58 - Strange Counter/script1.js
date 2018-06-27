//Input
var firstLine = "4"; // 6

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var t = parseInt(firstLine);
    console.log(strangeCounter(t));
    return "Hola";
};


function strangeCounter(t) {
    var display = 0, value = 3, startTime = 1, endTime = startTime+value-1;
    console.log("t: " + t + "\n\n");
    console.log("Primera Vez: value: " + value + "\tstartTime: " + startTime + "\tendTime: " + endTime);
    console.log( "Es true el while?: " + (startTime < t) + "\n\n");

    while(startTime < t){
        value = 2*value;
        startTime = endTime + 1;
        endTime = startTime+value-1;
        console.log("value: " + value + "\tstartTime: " + startTime + "\tendTime: " + endTime);
    };

    for(var i = startTime ; i <= endTime ; i++ ){
        if(startTime == t){
            console.log("entró acá");
            display = value;
            break;
        } else{
            value--;
            startTime++;
        };
        console.log("i: " + i);
    };

    return display;
}
