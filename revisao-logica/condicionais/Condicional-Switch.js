let diaSemana = 0;


if(diaSemana === 0){
    console.log("Domingo")
}else if(diaSemana === 1){
    console.log("Segunda")
}else if(diaSemana === 2){
    console.log("Terça")
}else if(diaSemana === 3){
    console.log("Quarta")
}else if(diaSemana === 4){
    console.log("Quinta")
}else if(diaSemana === 5){
    console.log("Sexta")
}else if(diaSemana === 6){
    console.log("Sabado")
}

// metodos equivalentes

let dia = "";

switch(diaSemana){
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Segunda";
        break;
    case 2:
        dia = "Terça";
        break;
    case 3:
        dia = "Quarta";
//etc


}
