//Input
var n = 4;
var str = [["add", "hack"], ["add", "hackerranck"], ["find", "hac"], ["find", "hak"]];


//Solution
function eval(n, str){
    var sched = [];
    //console.log("sched: " + sched);
    for(var i = 0 ; i < n ; i++){


        if(str[i][0] == "add"){
            sched.push(str[i][1]);
            //console.log("sched: " + sched);
            continue;
        } else{
            var counter = 0;
            for(var j = 0 ; j < sched.length ; j++){
                var string1 = sched[j];
                var string2 = str[i][1];
                //console.log("string1: " + string1 + "    string2: " + string2);
                //console.log("resultado: " + string1.includes(string2));
                if(!string1.indexOf(string2)){
                    counter++;
                };
            };
            console.log(counter);
        };



    };
    //return "Hola";
};



retorno = eval(n, str);

