//Input
var firstLine = "10"; // 6
var firstLine = "1000000000000"; // 649267441662 correct answer, but too much time
// var firstLine = "1000000000"; // 649267441662 correct answer, but too much time


retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var t = parseInt(firstLine);
    console.log(strangeCounter(t));
    return "Hola";
};


function strangeCounter(t) {
    var display = 0, value = 3, startTime = 1, endTime = startTime+value-1;

    if(endTime <= t){
        while(endTime < t){
            value = 2*value;
            startTime = endTime + 1;
            endTime = startTime+value-1;
        };
    };

    // this works but gives TLE error, works fine up to 10^9
    // while(t > startTime){
    //     startTime++;
    //     value--;
    // };

    value -= (t-startTime);

    return value;
}
