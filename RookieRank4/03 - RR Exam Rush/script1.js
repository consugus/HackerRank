//Input
var n = 2; // number of chapters
var t = 2; //time left until exam
var tm = [1, 2];

var n = 4;
var t = 5;
var tm = [4, 3, 1, 1];

retorno = eval(n, tm, t);

//Solution
function eval(n, tm, t){
    var answer = 0;
    //console.log("n: " + n);
    //for(var i = 0 ; i < n ; i++){
        answer = examRush2(tm, t);
    //};
    console.log("answer: " + answer);
    return "Hola";
};


function examRush(tm, t){
    var maxNoCh = 0;
    var totalTime = 0;
    tm.sort();
    console.log("tm: " + tm + "\n\n");
    for(var i = 0 ; i< tm.length ; i++){
        if( (totalTime + tm[i])  <= t){
            totalTime += tm[i];
            maxNoCh++;
        };

    };

    console.log("maxNoCh: " + maxNoCh);
    return maxNoCh;
};


function examRush2(tm, t){
    var maxNoCh = 0;
    for(var i = 0 ; i < tm.length ; i++){
        var timeAc = 0;
        var NoCh = 0

        if(tm[i] <= t){
            timeAc = tm[i];
            NoCh++;
        };
        //console.log("i: " + i + "    tm[i]: " + tm[i] + "    timeAc: " + timeAc);

        for(var j = 0 ; j < tm.length ; j++){
            if(i != j){
                if( (timeAc + tm[j]) <= t ){
                    timeAc = timeAc + tm[j];
                    NoCh++;
                };
                //console.log("i: " + i + "    j: " + j + "    tm[" + j + "]: " + tm[j] + "    timeAc: " + timeAc + "    NoCh: " + NoCh);
            };
        };

        if(maxNoCh < NoCh){
            maxNoCh = NoCh;
        };
        //console.log("\n     " + "tm[" + i + "]: " + tm[i] + "    maxNoCh: " + maxNoCh + "    NoCh: " + NoCh + "\n\n");
    };

    return maxNoCh;
};




