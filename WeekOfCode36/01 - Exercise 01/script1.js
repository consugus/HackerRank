//Input
var q = 3;
var acidNames1 = ["hydrochloric", "rainbowic", "idontevenknow"];
// Expected     polyatomic acid
//              non-metal acid
//              not an acid

// var q = 7;
// var acidNames2 = ["hydrochloric", "rainbowic", "idontevenknow", "ic", "hydroic", "hydro", "hydroxic"];
//var acidNames2 = ["hydroic"];
// Expected     non-metal acid
//              polyatomic acid
//              not an acid
//              polyatomic acid
//              non-metal acid
//              not an acid
//              not-metal acids

// var q = 1;
// var acidNames2 = ["hydro ic"];

//Solution

function eval(n, acidNames){
    for (var i = 0 ; i < n ; i++){
        console.log(acidNaming(acidNames[i]));
    };
    return "Hola";
};




function acidNaming(acid_name){

    // if(acid_name == "hydroic"){
    //     return "not an acid";
    // };

    //if( !hasSufix(acid_name) || acid_name.length == 2 ){
    if( !hasSufix(acid_name) ){
        return "not an acid";
    };

    if( hasPrefix(acid_name) ){
        return "non-metal acid";
    };
    return "polyatomic acid";
};

function hasSufix(acid_name){
    var temp = acid_name.slice(-2);
    if(temp == "ic"){
        return true;
    }
    return false;
};

function hasPrefix(acid_name){

    if(acid_name.length < 5){
        return false;
    };

    var temp = acid_name.slice(0, 5);

    if(temp == "hydro"){
        return true;
    }
    return false;
};






retorno = eval(q, acidNames1);

