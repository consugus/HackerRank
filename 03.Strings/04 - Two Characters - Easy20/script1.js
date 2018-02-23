//Input     // 1 <= s.length <= 1000
var s = "beabeefeab";       // 10   // 5
//var s = "ababab";         // 6    // 6
//var s = "aaaaa" ;         // 5    // 0
//var s = "ggzczxoxwqeihjsswxwxkuxqwcyeuxrppajcyrzahehomrlqzfesagmietjqtwsrioocnjqgggpzzkmxxqlujnqormwffsmhoatqbezymyhxwjtayyilozozzwbhhkewgimejokyvsyobcfprzjdgnhwitwsdssjohhvkvgwpxcnanqufqbskubxxiajpclpraimeozhvpwagabvhjndinvuhfzqlcvbfnkosqdsdzznsibukhlltcgaezcvlsrkbexelggocseryhqyntrolpskbgojetdaidcbcbiwzsemactmumjemlqkbqyqxbgjaqynnworreqbyqyawpqyuorkoqdlvovyqkvyqxffhbfcjabcqribrikvraivghmdssjqywbtkuzhoeltouoztkdjgupiwyowglrtttgcjxnnmvkihxckbayxwcjiyyrymomqclchpiorftyuuuccymzbzobltxojsdzdrtvqwcvclsfbkvxsdcncgzpjwjwvgyxzptjjscmujoslgx";
                            // 530  // 0
//var s = "zxvtsuvazzqsohqvnhqwlcfsdobcggbaomhhvpbhfhstpbbxwwwripixzeqcngvuhalpgzuwonrbgvfpmctcnxarwvbwyoanslcixlmudpixelepyqlpusqgrndcgjumzqgyhpmtzngqkbxgajbmpbxdghmzlimmqfmplhmfpnnawabfvavchimulofnkhbyhkvchqvcniwnowamrsbzldyhekkkskwxrsgprihvsyyvsawqabsgvbbpwrgcrjulrjcdpkotxbkcijtykrqrqjxppanqdxdpewesq";
                            // 293  // 0
//var s = "osvouiezrafgfnwngpgtaqwpubqjtgdglojfchmgxybyhpfyguxpmamutsepmtlnpszyujksvmeratfbiqnfprxmnundbqahowlyvzeuatlfgibmsucxpehxesjpufkbtodqufgorwovyykjbiatvlncuhgkihaiyhrbyqgppqrfihwqypxntjhxhizlarsosjqlzuihidcilwgcizvoyzeyjlyfbecgesphdizllxnegambrxtqthpexhvctybuamfwrgkskwwjxtxhihrchleseyiplwvvdetmndhrmyhdptlqepdkojxbiftarpycvwonrsxkkoiyacvguu";
                            // 338  // 0
//var s = "ucwtvajqreigbqszaukfieswtlhdvwhvlzsxswzbfcropnxlektloohamginpsxeooqsnlbaglmhiyednqibglmodhylweshcquhvxtqclqbvmptqglungavqccwlmhhogdlrzufeccpdmwnnrmgcxqlwdvtqqbicqbfgldxgdkkyvpzvlsncotyhwqeilzmguhpyrazsbsfvkzjzabcvrqwqndoqgztxtlpbfjcvbsplvbwlmmuyyqhiknybizxjzmrjvrtrsshgbiidrrcbapdwsxzlzlmcwrtvngokdvywjglorficgxqvatsbnvplqinopcrttpseweeekbypkvdanbcofvziojhpzhzaltgqvpstrrxfrjhdsdhrtwqzcqneicivppiquubsrvvbrtmwyhhqailyaaypfeusuefgqmbxmfadxtznfxfdtqggxeorjpvtmixlykezahzhxjbovglxggwxfcyrfxpefzolryernhmebhvcidocnknucdldlqtfvcoecygvejdrjnfrfrbqagcbellxnodvlzieerarmzrzfrdgxuhcfuwxvjlqmlflciotcylyyeywgtqgmbwghxaqesjgisuarjhqldcvxgyqzkwpecbapxxhevazufbgkrrzgxcnuuqdzzizbethncfhuvfjgccikzkqnksexzdvbhabdbrdspuygmhvmlbsptzejjtqnbdjpnhzamqvwliukpxxvkspgqxkedqcaaqwhglfiteiqnweyyfwswrkitadrayaqpllnnfatktsdlwtggzvjpefjglqbvpkpgtwarolbmsfbqxjsznmlmdohxwuxlasppsmqfcmfggxvimymnyqqoxdljdcyqlleuhfbemkwyysykdnjcazwrjhqpsclzhezqzghsmuzrapkxccniagkzfkntzrufvgqhbkfgyajwczsihigazrwvkdzequtqabdqqixjqudvdkvydknuamcxr";
                            // 1000 // 0
retorno = twoCharacters(s);

//Solution
function twoCharacters(s){
    var maxCount = 0;
    var str = s;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var hashChar = fillHash(str, alphabet);
    //console.log("str: " + str + "    hashChar: " + hashChar + "\n\n");
    var firstChar = "";
    var secondChar = "";
    var strChopped = str;
    var strAux = str;

    if(verifyIfRulesApply(s)){
        maxCount =  s.length;
    } else {
        //Do whatever is necessary to solve
        for(var i = 0 ; i < hashChar.length ; i++){
            if(hashChar[i] != 0){
                firstChar = hashChar[i];
                for(var j = (i + 1) ; j < hashChar.length ; j++){
                    if(hashChar[j] != 0){
                        secondChar = hashChar[j];
                        //console.log("firstChar: " + firstChar + "    secondChar: " + secondChar);
                        var charactersToDelete = charsToDelete(firstChar, secondChar, hashChar);
                        str = s;
                        //console.log("charactersToDelete: " + charactersToDelete);
                        for(var m = 0 ; m < charactersToDelete.length ; m++){
                            //console.log("charactersToDelete[" + m + "]: " + charactersToDelete[m]);
                            var aux = str;
                            str = deleteCharacter(charactersToDelete[m], aux);
                            //console.log("str: " + str);
                            var validation = verifyIfRulesApply(str);
                            if(validation && str.length > maxCount){
                                maxCount = str.length;
                            };
                        };
                        //console.log("str: " + str + "    validation: " + validation + "\n\n");
                    };
                };
            };
        };
    };

    return maxCount;
};





function fillHash(str, alphabet){
    var hashChar = new Array(27).join("0").split("").map(parseInt);
    hashChar[1] = 0;
    for(var i = 0 ; i < str.length ; i++){
        for (var j = 0 ; j < alphabet.length ; j++){
            if(str[i] == alphabet[j] && hashChar[j] == 0 ){
                hashChar[j] = str[i];
            };
        };
    };
    return hashChar;
};

function charsToDelete(firstChar, secondChar, hashChar){
    var answer = "";
    for(var i = 0 ; i < hashChar.length ; i++){
        if(hashChar[i] != firstChar && hashChar[i] != secondChar && hashChar[i] != 0){
            answer += hashChar[i];
        };
    };
    return answer;
};

function deleteCharacter(char, strChopped){
    var strAux = "";
    //console.log("char: " + char + "    strChopped: " + strChopped);
    for(var i = 0 ; i < strChopped.length ; i++){
        if(strChopped[i] != char){
            strAux += strChopped[i];
        } else {
            //i++;
        };
    };
    //console.log("    strAux: " + strAux + "\n\n");
    return strAux;
};

function verifyIfRulesApply(str){
    var answer = true;
    var char0 = str[0];
    var char1 = str[1];

    if( !(str.length >= 2 ) ){
        return false;
    };
    if(char0 == char1){
        return false;
    };
    for (var i = 2 ; i < str.length ; i++){

        if(i%2 == 0){
            if(str[i] != char0){
                return false;
            };
        } else{
            if(str[i] != char1){
                return false;
            };
        };
    };

    return answer;
};

