(function (){
    "use strict";
    const titulo = document.getElementById("txtTitulo");
    const descricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador");
    const resta = contadorContainer.getElementsByTagName("span")[0];
    const maxima = descricao.maxLength;
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

    contadorContainer.style.display = "block";


    descricao.addEventListener("input",function (){
        let numeroLetrasDigitadas = descricao.value.lenght;
        let caracteresRestantes = (parseInt(maxima) - parseInt(numeroLetrasDigitadas));
        resta.textContent = caracteresRestantes;

    });
    
})();