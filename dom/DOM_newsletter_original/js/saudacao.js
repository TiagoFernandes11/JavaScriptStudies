const msgFeedback = document.getElementById("newsletterFeedback");

//recuperar os valores no momento certo

//trigger dessa função está no evento onClick do botão
function cadastrarEmail(){
    let emailInput = document.getElementById("txtEmail"); // pega o elemento
    msgFeedback.innerHTML = `O email ${emailInput.value} foi cadastrado com sucesso`;
}