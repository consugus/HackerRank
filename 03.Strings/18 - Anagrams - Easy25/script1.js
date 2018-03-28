//Input
var q = 6;
var arr = ["aaabbb", "ab", "abc", "mnop", "xyyx", "xaxbbbxx"];
// 3, 1, -1, 2, 0, 1

var q = 1;
var arr = ["csgokgibmftzeozyadcofpouaerckbbpwhdg"];

var q = 10;
var arr = ["csgokgibmftzeozyadcofpouaerckbbpwhdg", "njdtcezqezsjbgotwjtacwngzecihkxvtaqxepnkqiusoklnvepyceebiijqsinnkfkpu", "bkhxeyirnfycfchjeptphnawckbmbxodkxcoxkiksinxkwjqncgxqgtusxhuuxxeuzvsmfegntdxpmofrwcjexd", "umqrjpxgrsadzejoyompdcwuaydewicsvvjgkhmbbmgbtr", "tgdklhhfhhkndsswpnhwzokbqzjtsdknlqxwxgbhonwtforxdztdpdghcpawsnjdd", "bcrclfpizxyswerphjupqzgtxbghglsinjmbrejsdjkzneqwnkndluwjvesdpkl", "vygmcrefcpgqtwoiicnuykdtqvwihkpcixpmottqk", "ifvznddbxbncu", "zsngccjmzyapttiessjprzvuauvnxrswmgdokodkodbhxjnrczjvyeqaynnxfhurnzhynkkdqlm", "xagzbrwbvmbwcqtjxnanojldwxgmkvbhxjiybfzytcuxsogpdicuspxoogczbfiyqtyta"];
// 8, -1, -1, 10, -1, -1, -1, -1, -1, -1,

retorno = eval(q, arr);

//Solution
function eval(q, arr){
    for(var i = 0 ; i < arr.length ; i++){
        console.log(anagram(arr[i]));
    };
    return "Hola";
};

function anagram(s){
    var changes = 0;
    var len = s.length;
    var hashStr1 = new Array(27).join("0").split("").map(parseInt); hashStr1[1] = 0;
    var hashStr2 = new Array(27).join("0").split("").map(parseInt); hashStr2[1] = 0;
    var s1, s2;
    if(len%2 == 0){
        s1 = s.slice(0, len/2);
        s2 = s.slice(len/2, len);
        //console.log("s1: " + s1 + "(" + s1.length + ")" + "    s2: " + s2 + "(" + s2.length + ")");

        for(var i = 0 ; i < len/2 ; i++){
            var index1 = s1.charCodeAt(i)-97;
            var index2 = s2.charCodeAt(i)-97;
            hashStr1[index1]++;
            hashStr2[index2]++;
        };
        //console.log("hashStr1: " + hashStr1); console.log("hashStr2: " + hashStr2);
        var sum1, sum2;
        for(var i = 0 ; i < hashStr1.length; i++){
            //console.log(Math.abs(hashStr1[i] - hashStr2[i]) );
            //console.log(hashStr2[i] < hashStr1[i]);
            if( (hashStr1[i] - hashStr2[i]) > 0 ){
                //console.log("entró una vez");
                changes += hashStr1[i] - hashStr2[i];
                //console.log("changes: " + changes);
            };
        };
    } else{
        changes = -1
    };
    return changes;
};
