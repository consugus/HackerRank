//Input
var year = 2017;
// var year = 2016;
// var year = 1918

//Solution

function solve(year){
    console.log("(year == 1918): " + (year == 1918));
    console.log("((year <= 1917) && (year % 4 == 0)): " + ((year <= 1917) && (year % 4 == 0)));
    console.log("((year % 400 == 0)): " + ((year % 400 == 0)));
    console.log("((year % 4 == 0) && (year % 100 != 0 )): " + ((year % 4 == 0) && (year % 100 != 0 )) );

    if(year == 1918){
        return "26.09.1918";
    }
    if( ((year <= 1917) && (year % 4 == 0)) ||
    ((year % 400 == 0)) ||
    ((year % 4 == 0) && (year % 100 != 0 ))  ){
        return "12.09." + year;
    }
    else{
        return "13.09." + year;
    }
}



var retorno = solve(year);
