//Input

// #region         Syncronous mode (deprecated)
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// var contenido = archivoTxt.responseText;
// console.log("contenido: " + contenido);     // display the response
// #endregion

// #region          Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

var str = "Σ Φ Ψ Ξ Δ λ Ψ Δ Λ Σ Φ Δ λ Ψ ξ Δ ϗ Ξ Δ Φ Ψ Ξ ϑ λ Ψ Λ Σ Θ ϑ Ξ ϗ Φ ϑ λ Ψ Σ Ξ Ψ λ ϑ Ξ Ψ ζ β Σ φ Δ Ψ Σ Φ Ψ Σ Ξ Ψ ξ Λ ϗ Ξ Ξ ϑ Ψ ϖ Σ Ξ Ψ Π Σ ϖ Λ Σ φ Δ Ξ Ψ Ω Ψ Π Λ Σ Φ ϖ ϗ ϖ ϑ Ψ Δ Ψ Ξ Δ Ψ Θ Δ φ ϗ Δ Ψ ϖ Σ Ψ Ξ ϑ λ Ψ Γ Δ Θ ϗ Φ ϑ λ Ψ Σ Ξ Ψ Δ Λ Λ ϗ Σ Λ ϑ Ψ α Δ Ψ Σ Ξ Ψ Δ Λ Λ ϗ Σ Λ ϑ Ψ α Δ Ψ Σ λ Ψ ξ Δ Φ ϖ Σ Λ Δ Ψ ϖ Σ Ψ Φ ϗ Σ ξ Ξ Δ Ψ λ β Ψ Π ϑ Φ Γ Ρ ϑ Ψ Δ Ξ Ψ α ϗ Σ Φ μ ϑ Ψ Ξ ϑ Ψ λ Δ Ξ β ϖ Δ Φ Ψ Ξ Δ λ Ψ ε Ξ Δ β μ Δ λ Ψ ϖ Σ Ξ Ψ Π Δ ζ ϑ Φ Δ Ξ Ψ Ω Ψ Δ Φ ϗ Θ Δ Φ ϖ ϑ Ψ Ξ Δ Ψ μ Λ ϑ Π Δ Ψ Π Δ Λ Ψ Σ λ ϑ λ Ψ Γ Σ Λ Λ ϑ λ Ψ Σ Ξ Ψ Δ Λ Λ ϗ Σ Λ ϑ Ψ α Δ Ψ Σ Ξ Ψ Δ Λ Λ ϗ Σ Λ ϑ Ψ α Δ Ψ Ξ Δ λ Ψ Π Σ Φ Δ λ Ψ Ω Ψ Ξ Δ λ Ψ α Δ η β ϗ μ Δ λ Ψ λ Σ Ψ α Δ Φ Ψ Π Δ Λ Ψ Ξ Δ Ψ Θ ϗ λ Θ Δ Ψ λ Σ Φ ϖ Δ Ψ Ξ Δ λ Ψ Π Σ Φ Δ λ Ψ λ ϑ Φ Ψ ϖ Σ Ψ Φ ϑ λ ϑ μ Λ ϑ λ Ψ Ξ Δ λ Ψ α Δ η β ϗ μ Δ λ Ψ λ ϑ Φ Ψ Δ ζ Σ Φ Δ λ ";
// var str = "Σ Φ Ψ Ξ Σ";
retorno = eval(str);

//Solution
function eval(str){
    var regex = / /g; str = str.trim().replace(regex, "");

    var aDist = [];
    var fDist = [];
    var fDistO = [];
    console.log(str + "\t" + aDist + "\nLargo: " + str.length);

    for(var i = 0 ; i < str.length ; i++){
        if(aDist.indexOf(str[i]) === -1){
            aDist.push( str[i] );
        }
        if(  fDist[ aDist.indexOf(str[i]) ]  ){
            fDist[  aDist.indexOf(str[i])  ]++;
            fDistO[  aDist.indexOf(str[i])  ]++;
        } else{
            fDist[  aDist.indexOf(str[i])  ] = 1;
            fDistO[  aDist.indexOf(str[i])  ] = 1;
        }
    };

    str = str.split("Ψ").join(" ");
    fDistO.sort( (a,b) => {return b-a} )

    // se tomó como fDistO[0] como el espacio, separando las palabras
    // fDistO[0] = 74 -> Ψ x " "

    var reemplazar = aDist[4]; // console.log( "Reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "a");
    // fDistO[1] = 53 -> Δ x a


    var reemplazar = aDist[0]; // console.log( "Reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "e");
    // fDistO[2] = 34 -> Σ x e

    var reemplazar = aDist[3]; // console.log( "Reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "l");
    // fDistO[3] = 31 -> l ya que no existen dos letras que se usen repetidas
    // salvo la "ll" y la "rr" tenía que ser una de las dos


    var reemplazar = aDist[1]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "n");
    // fDistO[1] = 34 -> Φ x n

    var reemplazar = aDist[9]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "o");
    // fDistO[1] = 34 -> ϑ x o

    var reemplazar = aDist[5]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "s");
    // fDistO[1] = 34 -> λ x s

    var reemplazar = aDist[6]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "r");
    // fDistO[1] = 34 -> Λ x r

    var reemplazar = aDist[8]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "i");
    // fDistO[1] = 34 -> ϗ x i

    var reemplazar = aDist[18]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "v");
    // fDistO[1] = 34 -> α x v

    var reemplazar = aDist[10]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "m");
    // fDistO[1] = 34 -> Θ x m

    var reemplazar = aDist[7]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "b");
    // fDistO[1] = 34 -> ξ x b

    var reemplazar = aDist[17]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "c");
    // fDistO[1] = 34 -> Γ x c

    var reemplazar = aDist[14]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "d");
    // fDistO[1] = 34 -> ϖ x d

    var reemplazar = aDist[15]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "p");
    // fDistO[1] = 34 -> Π x p

    var reemplazar = aDist[20]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "t");
    // fDistO[1] = 34 -> μ x t

    var reemplazar = aDist[22]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "q");
    // fDistO[1] = 34 -> η x q

    var reemplazar = aDist[12]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "u");
    // fDistO[1] = 34 -> β x u

    var reemplazar = aDist[13]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "g");
    // fDistO[1] = 34 -> φ x g

    var reemplazar = aDist[19]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "h");
    // fDistO[1] = 34 -> Ρ x h

    var reemplazar = aDist[11]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "j");
    // fDistO[1] = 34 -> ζ x j

    var reemplazar = aDist[16]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "y");
    // fDistO[1] = 34 -> Ω x y

    var reemplazar = aDist[21]; // console.log( "reemplazar: " + reemplazar );
    regex = new RegExp(reemplazar, "g"); str = str.replace(regex, "f");
    // fDistO[1] = 34 -> ε x f

    console.log(str);

    console.log("\n");
    console.log("aDist: " + aDist + "\t largo: " + aDist.length);
    console.log("fDist: " + fDist + "\t largo: " + fDist.length);
    console.log("fDistO: " + fDistO + "\t largo: " + fDistO.length);


    return "Hola";
};



