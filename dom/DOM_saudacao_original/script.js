(function(){
        const nomeDoUsuario = "Tiago Fernandes Ribeiro";
        const elemento = document.getElementsByClassName("saudacao")[0];
        if(nomeDoUsuario){
                elemento.innerHTML += "<b> " + nomeDoUsuario + "</b>";
        }else{
                elemento.parentElement.style.display = "none";
                //elemento.remove() -> removeria o elemento do HTML
        }
})();