//Input
var firstLine = "5"; var secondLine = ["10 10 1 1 1", "5 9 2 3 4", "3 6 9 1 1", "7 7 4 2 1", "3 3 1 9 2"];
// 20 37 12 35 12
// var firstLine = "1"; var secondLine = ["3 6 9 1 1"]; // 12
// var firstLine = "1"; var secondLine = ["7 7 4 2 1"]; // 35
// var firstLine = "1"; var secondLine = ["3 3 1 9 2"]; // 12

// #region test case 11
//var firstLine = "10"; var secondLine = ["742407782 90529439 847666641 8651519 821801924", "142640749 652432197 701695848 936714099 324221606", "736418699 754161925 912285746 841360803 736841333", "177076565 651852957 926160119 137199984 872396383", "232813954 654376491 933554781 63130979 441062505", "988402860 283959645 572488886 802335530 193057740", "571683259 397259663 136103531 271866251 405911181", "810421806 414506999 58343377 512117653 203737449", "235081335 101052703 957899374 147367080 942413506", "547257058 324443644 594266462 325933528 461643627"];
// 617318315833461267
// 711232858900355655
// 1306346564995590229
// 253435467783263923
// 158694707102490425
// 783234000390521730
// 185809605416820942
// 155917081637180036
// 240076105402801530
// 430963577188284828
// #endregion


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var bwbcWcZ = secondLine[i].split(" ").map( x => parseInt(x));
        var b = bwbcWcZ[0], w = bwbcWcZ[1], bc = bwbcWcZ[2], wc = bwbcWcZ[3], z = bwbcWcZ[4];
        console.log(taumBday(b, w, bc, wc, z));
    };

    return "Hola";
};

function taumBday(b, w, bc, wc, z) {
    return Math.min( (b*bc + w*wc), ((b+w)*bc + w*z), ((b+w)*wc + b*z) );
}
