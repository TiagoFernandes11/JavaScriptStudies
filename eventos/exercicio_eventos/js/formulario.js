(function (){
    "use strict";
    const titulo = document.getElementById("txtTitulo");
    const descricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador");
    const resta = contadorContainer.getElementsByTagName("span")[0];
    const maxima = descricao.maxLength;
    const formCadastro = document.querySelector(".formCadastro");
    const btn = document.getElementById("btn");

    mostrarNumero(maxima);

    formCadastro.addEventListener("submit", function (e){
        if(!titulo.value){
            showErrorMessage("Preencha todos os campos!");
            e.preventDefault();
            titulo.focus();
        }
        if(!descricao.value){
            showErrorMessage("Preencha todos os campos!");
            e.preventDefault();
            descricao.focus();
        }
        
    })

    function showErrorMessage(msg){
        alert(msg);
    }

    contadorContainer.style.display = "block";

    function checkLength(){
        let numeroLetrasDigitadas = descricao.value.length;
        let caracteresRestantes = (parseInt(maxima) - parseInt(numeroLetrasDigitadas));
        mostrarNumero(caracteresRestantes);

    }

    function mostrarNumero(n){
        resta.textContent = n;
    }

    descricao.addEventListener("input",checkLength);

    btn.disabled = true;

    const chkAceito = document.getElementById("chkAceito");

    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked;
    })
    
})();