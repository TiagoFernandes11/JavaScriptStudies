(function (){
    "use strict";
    const titulo = document.getElementById("txtTitulo");
    const descricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador");
    const resta = contadorContainer.getElementsByTagName("span")[0];
    const maxima = descricao.maxlength;
    const formCadastro = document.querySelector(".formCadastro");

    formCadastro.addEventListener("submit", function (e){
        if(!titulo.value){
            alert("Preencha todos os campos!");
            e.preventDefault();
            titulo.focus();
        }
        if(!descricao.value){
            alert("Preencha todos os campos!");
            e.preventDefault();
            descricao.focus();
        }
        
    })

    contadorContainer.removeAttribute("style");

    function checkLenght(){
        // NaN só deus sabe porque
        let numeroLetrasDigitadas = descricao.value.lenght;
        let caracteresRestantes = (parseInt(maxima) - parseInt(numeroLetrasDigitadas));
        resta.textContent = caracteresRestantes;

    }

    descricao.addEventListener("input", checkLenght());
    
})();