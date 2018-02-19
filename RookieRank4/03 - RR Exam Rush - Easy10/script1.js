//Input

var n = 2; // 1 <= n <= 10.000  [number of chapters]
var t = 2; // 1 <= t <= 10^9    [hours until exam]
var tm = [1, 2];

var n = 4;
var t = 10;
var tm = [3, 5, 1, 1];

retorno = eval(n, tm, t);

//Solution
function eval(n, tm, t){
    console.log(examRush(n, tm, t));
    return "Holita";
};


function examRush(n, tm, t){
    var maxNoCh = 0;
    var totalTime = 0;
    tm.sort(function(a,b){ return a-b});

    //In case all values exceed t, no need see inside the array
    if(tm[0] > t){   return 0;   };

    for(var i = 0 ; i < n ; i++){
        if( (totalTime + tm[i]) <= t ){
            totalTime += tm[i];
            maxNoCh++;
        };
    };

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




