const txtEmail = document.getElementById("txtEmail");
// nao funciona direito essa merda
function editarEmail(){
    txtEmail.disabled = false;
    txtEmail.focus();
}

function blurEmail(){
    txtEmail.disabled = true;
}



