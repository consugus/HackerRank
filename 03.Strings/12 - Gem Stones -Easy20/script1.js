//Input
var n = 3;                              // 1 ≤ N ≤ 100
//var arr = ["abcddez", "baccdz", "eeabgz"]; // 2
var arr = ["abcddez", "baccdz", "eeabgz"]; // 2

// #region TestCase26
// var n = 100;
// var arr = [
// "ayayrnhxvfbxzodsycpjqlrbwbmrmoaeunllzjrtdcmdbcmbdefglycboqxkagyderwkpdpewsjgkqdhcsixxhsrolrfnbkilw", 
// "wgfvoecyrmvjefplndcdrozkpkoxnigzpcgzzeitwddxtqrhfqsukchfxqycacmoiknbiwhxxmbpljqhkahjt", 
// "rbharxcldxthzuqrmofxcomdvjewxvwpsyhdnyamglki", 
// "hjtcaklozqfqdhegxprswinviyumb", 
// "tkpypsgvxridahechuimlgzbszkwjqofikegrfnc", 
// "bpxujjbamtbayygucpdubwjqchiixesgaxfsoyveixdudaimkmbjpsvqhjjhdzdmpctwqfvpnydsrphinuwlnxns", 
// "dhqdtxtqmjpljdcvsbbxycjgvjgdwuawifiarpovyvuegjunrfwkiezevniawwj", 
// "iakgmjufocwzvckqgrblosihzoallnxpkfrddewuugbfcheepnssbodotlwmerspnrkutwjfpvjmyznyxahlemuosfxwwqcrpnil", 
// "tuwrztdwcnixcmnthwfpqvobumirefolsyutfjsbcrymcnkguetxxpvqgnuupilfacg", 
// "auwsniqazoujcwrhgmydxtqtdodeqxhjvdrwecllpgobpyhhmwzbxnjufhejvnrkbkcvgfrlnwcsvitkdeiwwvoyvu", 
// "zqbrrwhredbkhpifuugdlsoctjqnmavivmxly", 
// "vwfhdyvrpesrrzsbdzazfelvkoxkjmbpuchrlukfpyuiwltpgyijoxlhuqffyabnzcgjpcnrwxhjbpgduaqeicdfu", 
// "jmxunyoixyqkwqzcjvapzualqsfxsdejrvwsdnrlyzcagcjmskntpscosnkuzhbpnodrdyvccfjfzkmcutbianzmgrgqde", 
// "pemtwacnulonrfqivxsuqvjtydvzkhbgbx", 
// "wssqhzlgzqiolfyfrmslcsemodxmfonzekuenqkhnpfhmcssojhkbpantwvedakogcqohsuyl", 
// "tvhfdoltzrarjgwcmhfxtihgcnoniovktrzrastgacyztobfwmpibkotkoqbgjdfuyenveabpbhap", 
// "qfezrjtualblytkmiiynkssgiawedxobpzhcmwvf", 
// "kunvirnaxglbzvwdigzonasnmlefufxthlvmjmwcvyquuopqy", 
// "srxexnbcafbyzfpookleaqmouctszcqinvrmyomfaivahwqitdpkhcgxgvhqiqqbynmljgjeqyvxbmbnxrqjmau", 
// "ammqkvpptlborkerralkzxoacygliubggvumelrxtinbsufwahekgcfvwttpqqqxzwspcjrde", 
// "prhefnqfgzrojyedwpaampontkyghlweicuxlbqfvuars", 
// "qtihdwshwpnojovcrunasdkjjvgxqmgzwmqmpgrcakfjylwextpobkkntxxceiupzubuoiaqecis", 
// "rkfenjmobutlqwqsdgpiapchyxvzl", 
// "ihjrfqtgzcynaszvdseeaddvylhyneypqpungdddzretiavlaykfykjoyxoxlqjymwgjxedrldb", 
// "usakrhosijzciglpgvtmqqrnfdunzqntbtkoeopwxlsegsmodiqaferxyro", 
// "pcdqugnvbrtaikyjeonmyekssxutoidhyldzzwjf", 
// "hpcdtwwocixiastzqvqvbwfkvfktgchdajoyxrbxfmexudaiwjskrufbbasbmjufxqjvejauklafpkcivunxy", 
// "qkqcialfsqhkzmgqssiiehvxiwoyenaghnndoqhlmuodobgpgrgpolrzmzmtuqhwhkdkjwfpauqxxbdwwanv", 
// "tahbfoqjhhyjwociqvptkuifrlmziiqktsdnpilgdexazmkbxm", 
// "cujhiwsvsptysoybzlipcgiwqtcvvyvvobxohdlpkujzqtdnqemgxocfpazxrhqcnldy", 
// "ionolubaqmqyuhvsktigmetfnghjdcgvywziqpgmtutmxjbrnyiqhh", 
// "hpeouucdzrvjovhzrtykwdgzbvxgextswhxvvwufqrxdlrdomiznfarqslmqciqaywlzckotdq", 
// "divdoncdlkcgihpuurbicfybfkzkdszdyhqwncmvyozqqjprhloosredxymvldubqdndmwtvggrcat", 
// "suhrpnpuipcbgtrbilowodsvfzutflcvzpesimcianxefaqsnohhlmbdjdnfdxgwkfzgijyqzkw", 
// "admcwveyqdgrluiswaawfqmsngulzoonvcrjzvhikxebntrkjjhpzauogkt", 
// "dvnvpiugvvusjahtsrecuylbamkvmfhjouznqvvawxmv", 
// "awvlucnhyozgqpjltdiobrxfkemsftppa", 
// "cmfgtxqowqzczmbltkznsldmxzthnlvkazeiiqfbcjvopysaeru", 
// "qxhoigvvlhbdpetzzpccxptobeuafbynmszkjjjfayndarswkrscmp", 
// "ecdevhmdikfyujafjzhyzkrqvferrmjwytmofcitwpjsqvjwicokbdpclzgzsnlrbfgabdoxbsvoqwanmmmypjizo", 
// "yfndihlzocgmxabsktupjevhzwrwq", 
// "rejqymhqvqfwajqtsqvtoiqnctmbbxsbkntqcaewkzakhmfrsxhlpzzqiruynfxusojuygggiefzstikmcbhhzvxtudf", 
// "zytvjztzyjwrzvuscxaishplniotuorbjukrhpjsxgdhmmgsecwqpinqbffpbdhknocexidozrvqtmiocwhq", 
// "vhhycyncgxodfmiingnlgqzrukxukzdtaczallisxzsjqialdahofsltgbhpdvejwcmzigncctwtje", 
// "flzvgpaotyboifihguidmtkxewctgvnwkjnxhvseerleydprmqeli", 
// "ojdtqdcrxisufnbyjegqmskzdqiyrdaefsbalhvjmacnunzgmilobmhsgypitihijmpkguwxeaicvcpsvgzyzflqyognu", 
// "fclepxngurybwngiyzojoxvxihotoipmvkxfsdaq", 
// "wioxghynzskvacpqlmfbdujretrm", 
// "fmjbvnjgjqrmdexjdfbjirqiftypgpvlmcngolrfngiqrwtpsanzybkcvhhabuahb", 
// "mymbfrbvrjtykklvtnkhaydgnlbuwktiemikrpxsoqskkgmatiqgyggbjlfrfynewzzedaxqgtphxsnjcwiyzyfyyrdjfxmxuc", 
// "eczouynjkfjiqrhaaivrrglycxeltuokqgfgjdltvpsavldsysnfbvwqdbhwusgtvwamtrvxeygxwbgsducp", 
// "ulyycfnoamjsowhechzuxrelkicqntcvwgwmkbdpitdxwvlezz", 
// "levddpeaxchbgsyqkrcbgboonujdefquepnlgpucrydonwxuautsufnmaeeadyshphbwbipzkmraqbubbnkc", 
// "rcqbfyzfkahyjwrireqewpzxhweusejetvvyqmvndrimpzrxwbhmyjiyplakgbscpeoqkmrr", 
// "caqgmzrdvbtxdfmjotanbgaxrzqxboyiyhknypiiwaxealqzjevyalllcmjjuqfxnwjpmdlwxpaymipveljjsomdzq", 
// "fzthexjxlsllqkusjqyrprhydeinadikssuvapqxuzjcetmlvsyfgnxonwrvgkipotxyevtojekpb", 
// "hgmtzdbfarlwdlwsnyfcqsxtbmjbozelmnrvjngvpititekus", 
// "zwzxqcemdkwfaoiraesaviyvpbjsldypobvailcebanhttqevtgwrbbdonubt", 
// "dtiugjxdjlkbamfuldyhroknssoyycsmbmikbvuhwqhiflizzoeuyxrfptrgjfwmyv", 
// "gzimamdjltbnoureicxhowvsfmqypksu", 
// "fpgxbeqaiztkyfobrjvvmvpwdhsqclngezmu", 
// "hougsdjedjacxbzytfcvcolevfoiktnxebupiwdupscjeekeaqrtgdbemodkl", 
// "xwmksibzqymctvtcwbskgdhwtlcwhliqmbeioppxguqfansrxojveznizs", 
// "hbzkivbrnuawesnofxudjqpkocbmlgbatmy", 
// "quggkllvdcuspwqxisuofsezmtqjaximafykbchqztnrfbyonzs", 
// "xygkfpedqvzztovaazinximtksophnaqrtrfhgkxlcoizkdjolowjgzqytuelbhcrbbtliwbejhploaksif", 
// "pqxkjufpwhphsqylipdegncaquoukbolwhoqafyahnrxrfwnymozzayooljozkvtwaofnunangqjiqjjruxzznfzmilusftuz", 
// "fbhbvrnqtojnymfyrargfdccwuoyicqlatasneagomvnihxkgjwknijwtwmvufhpcauvtjyhikcqdez", 
// "lklrbthlticrsiiqluepdbthzoggmshmffowxvskaamtxeinuxlwxrrendozdyfrdfjecojooom", 
// "fvtxcsvtsifwcvoavqzubugourmhopkwzgmqbebtfnuvtjylodfcpwuooddvfaclcqmiazfmypkodprep", 
// "drscbotgyolpkjamfwbeuznceriqxvhmp", 
// "ktipdxlvdzywgajuoggehwdrmcaayclfbsqn", 
// "xqucshkwdlqlehebzewdufhbhsycwkrlltljyjhnwpyjnlgwbnfrubaaesyalcvaldfqieodiwqxjpvgjqshnlpmzdgomj", 
// "wwdcvolnnymnobvjcotgcrsddouufvaeiyqfplomwedxqhlrfmpedhvqsitoefrjrkgxneysztige", 
// "ltovwgcpjvpjiqgqtjxgbsjtptqzattomgfrbjrzbwycnbwgeebgnexmuhiouuhegyplcivzehdakahsofuerqkhhhri", 
// "hfbsgpxkqjqrmekvdufmziaoylrctwqmon", 
// "ovkjpgdnabqzwsqihzieifgiptgwyxrldtpudvczaqmpbjbhiravlfzeyteudggovdh", 
// "lmczweoqihgxnjuoyvrbqaxupzwkvdscythgf", 
// "cndcarmcjuixhrexjqvwubeymfavkvswelipckpnuskgopbsrwiuzdzvpddrnmljizbtvt", 
// "vydxiuusmfkdgtrwcrublnwopzxfbrojhqgaee", 
// "zwxpsvcqplkemgeoenjrihtubydabchof", 
// "uzrpzgdqgkmwfxojfuwjgmidjykvtcarhhlniensmcqsxskxobtlasv", 
// "omqxlzqrinyfkatnieawkbjggzuhkdiaspopkjojyfcfipmwtv", 
// "sgeqpsdfzjbswsfqpicrxirakyhbvwxprrozunqmazhhsbtzal", 
// "igqvlwmihxyvdbpfzsjarueonjfrtxck", 
// "mqyainlpyerftcovkowzgkdjbxuhstsz", 
// "tsyrbgefdzpvvcahnjkowxsilsumq", 
// "fxtmkchbaqqeluzzkmrvoxpjpxyiaszxjttxnrdwbexascetg", 
// "eyefdbvkfvrpbhwpjmvmoiqkzrixhsmjkhizmnmlaoqpprowcmtzwtgzhryjulasfdltukiyymnpbdyuyugvoodtaczetlibwz", 
// "hcjfxskbeblhmlzqmzvbrutfacwondphbgyjtnwwjupwcqjbebtpfsmvkiqigwzxbxxpx", 
// "fgmqplrbaspwcukthavxqnzsyijoqed", 
// "tkgahgslsqujjwhnpdnxkextirpvbhplqzpcpgniqucjwdfcudifwjzohravosjiamgvyldmfsabykh", 
// "jgepcfqnfhtevprhnaoskimcgyauvghuelyodqzidfjxfhmlcvtcmqbxikrofalmujorlwpoheucwmrvc", 
// "dxighozubetqxvludodjrzgfgzqogwecptbwoynpascqowjlhzzwvmaiuvkzblifv", 
// "rpjybciaklwgxzoeuvmjqhtndsf", 
// "wgsdxqcsmlzjhrigzhnkkamevanvchhgokpgiyqtbadydylkqvgmwltxfussuuywi", 
// "tnulqhbfwiojdwzmazgekltmxrkrnysivcqbph", 
// "jjefgnsxmbizjsialnymigtzbqhyojpyqpgyokinxjyhpyidsfrtjqczbmplqacmyenuwxuvzzreajezgfrgv", 
// "yihzylpgwsfnbehtmdsktjjmoruaqszftcvxlg", 
// "pjykfhmmgpdwjsihqwoocbjxiumrzjotyeeafnevlpk"
// ];
// #endregion

retorno = eval(n, arr);

//Solution
function eval(n, arr){
    var answer = gemStones(n, arr);
    return answer;
};

function gemStones(n, arr){
    var gemStonesNumber = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var hashAlphabet = new Array(alphabet.length+1).join("0").split("").map(parseInt);
    hashAlphabet[1] = 0;

    console.log("alphabet: " + alphabet + "\nhashAlphabet: " + hashAlphabet);

    for(var i = 0 ; i < alphabet.length ; i++){
        for(var j = 0 ; j < n ; j++){ // alphabet
            for(var k = 0 ; k < arr[j].length ; k++){ // arr
                if(alphabet[i] == arr[j][k]){ // arr[j]
                    hashAlphabet[i]++;
                    break;
                };
            };
        };
    };

    console.log("alphabet: " + alphabet + "\nhashAlphabet: " + hashAlphabet);
    console.log("arr.length: " + arr.length);
    for(var i = 0 ; i < hashAlphabet.length ; i++){
        if(hashAlphabet[i] == arr.length){
            gemStonesNumber++;
        };

    };
    return gemStonesNumber;
};



