//falsy values - 0, "", NaN, undefined, null, false
//truthy - todos os demais

let valor = 10;

if(valor){
    console.log("true");
} else {
    console.log("false");
}

valor = 0;

if(valor){
    console.log("true");
} else {
    console.log("false");
}


valor = "";

if(valor){
    console.log("true");
} else {
    console.log("false");
}


valor = "alguma coisa";

if(valor){
    console.log("true");
} else {
    console.log("false");
}

valor = NaN;

if(valor){
    console.log("true");
} else {
    console.log("false");
}

valor = undefined;

if(valor){
    console.log("true");
} else {
    console.log("false");
}