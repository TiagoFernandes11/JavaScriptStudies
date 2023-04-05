function calcularIMC(peso, altura){
    return peso/(altura**2);
}

function classificarIMC(peso,altura){
    let imc = calcularIMC(peso,altura)
    console.log(imc);
    if(imc < 18.50){
        return "Você está abaixo do peso"

    } else if(imc <= 25 && imc >= 18.50){
        return "Você esta no peso ideal"
    }
    else if(imc > 25 && imc < 29.9){
        return "Você é pré-obeso";
    } else if(imc >= 30) {
        return "Você é obeso";
    }
}

let classificacao = classificarIMC(76,1.76);

console.log(classificacao);
