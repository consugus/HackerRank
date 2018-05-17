//Input
var firstLine = "9";    var secondLine = "10 5 20 20 4 5 2 25 1"; // 2 4
// var firstLine = "10";   var secondLine = "3 4 21 36 10 28 35 5 24 42"; //4 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var score = secondLine.split(" ").map( x => parseInt(x) );

    console.log(breakingRecords(score));
    return  "Hola";
};


function breakingRecords(score){
    var highestRecordCount = 0;
    var highestRecord = score[0];
    var lowestRecordCount = 0;
    var lowestRecord = score[0];
    var len = score.length;
    for(var i = 1 ; i < len ; i++){
        if(score[i] > highestRecord){
            highestRecord = score[i];
            highestRecordCount++;
        };
        if(score[i] < lowestRecord){
            lowestRecord = score[i];
            lowestRecordCount++;
        };
        //console.log(i + " highestRecord: " + highestRecord + "    highestRecordCount: "  + highestRecordCount + "    lowestRecord: " + lowestRecord + "    lowestRecordCount: " + lowestRecordCount);
    };

    return highestRecordCount + " " + lowestRecordCount;
};

