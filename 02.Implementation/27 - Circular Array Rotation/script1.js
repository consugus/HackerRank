//Input
var firstLine = "3 2 2"; var secondLine = "3 4 5"; var thirdLine = "1 2"; // [4, 5, 3]  --> 5 3
// var firstLine = "3 2 3"; var secondLine = "1 2 3"; var thirdLine = "0 1 2"; // [2 3 1] --> 2 3 1

// var firstLine = "51 51 12";
// var secondLine = "39356 87674 16667 54260 43958 70429 53682 6169 87496 66190 90286 4912 44792 65142 36183 43856 77633 38902 1407 88185 80399 72940 97555 23941 96271 49288 27021 32032 75662 69161 33581 15017 56835 66599 69277 17144 37027 39310 23312 24523 5499 13597 45786 66642 95090 98320 26849 72722 37221 28255 60906";
// var thirdLine = "47 10 12 13 6 29 22 17 7 3 30 45";
// 72722 90286 44792 65142 53682 69161 97555 38902 6169 54260 33581 98320

var firstLine = "9 2 3"; var secondLine = "1 2 3 4 5 6 7 8 9"; var thirdLine = "0 1 2"; // [2 3 1] --> 2 3 1

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var nkq = firstLine.split(" ").map( x => parseInt(x));
    var n = nkq[0]; var k = nkq[1]; var q = nkq[2];
    var a = secondLine.split(" ").map( x => parseInt(x));
    var m = thirdLine.split(" ").map( x => parseInt(x));

    console.log(circularArrayRotation(a, k, m));

    return "Hola";
};

function circularArrayRotation(a, k, m) {
    var len = a.length;
    var aRotated = new Array(len);
    var aToShow = [];
    for(var i = 0 ; i < len ; i++){
        aRotated[i] = 0;
    };

    for(var i = 0 ; i < len ; i++){
        if( (i + (k%len)) < len ){
            aRotated[ i+(k%len )] = a[ i ];
        } else{
            aRotated[ (i+(k%len))  - len] = a[ i ];
        };
    };

    var len2 = m.length;
    for(var i = 0 ; i < len2 ; i++){
        aToShow.push(aRotated[ m[i] ] );
    };

    return aToShow;
}
