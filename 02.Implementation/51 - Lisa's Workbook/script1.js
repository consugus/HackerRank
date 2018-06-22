//Input
var firstLine = "5 3", secondLine = "4 2 6 1 10"; // 4

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0]; // number of chapters
    var k = nk[1]; // maximum number of problems per page
    var arr = secondLine.split(" ").map( x => parseInt(x) ); // problems in the ith chapter

    console.log(workbook(n, k, arr));
    return "Hola";
};


function workbook(n, k, arr) {
    var specialProblemsCount = 0;
    var len = arr.length;
    var page = 1;
    for(var i = 0 ; i < len ; i++){
        for(var j = 1 ; j <= arr[i] ; j++){
            if(j == page){
                specialProblemsCount++;
            };
            if(j % k == 0 || j == arr[i]){
                page++;
            };
        };
    };

    return specialProblemsCount;
}
