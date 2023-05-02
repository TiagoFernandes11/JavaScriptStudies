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
            showErrorMessage("Preencha todos os campos!", function(){
                titulo.focus();
            });
            e.preventDefault();
            titulo.focus();
        }
        if(!descricao.value){
            showErrorMessage("Preencha todos os campos!");
            e.preventDefault();
            descricao.focus();
        }
        
    })

    const feedbackMessage = document.getElementById("feedbackMessage");
    const feedbackMessageCloser = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg){
        //feedbackMessage.setAttribute("class", "show");
        //feedbackMessage.textContent = msg;
        feedbackMessage.classList.add("show");
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg;

        function hideErrorMessage(){
            feedbackMessage.classList.remove("show");
            feedbackMessageCloser.removeEventListener("click", hideErrorMessage);

            if(typeof cb === "function"){
                cb();
             }
        }
       
        feedbackMessageCloser.addEventListener("click", hideErrorMessage);

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