(function(){
        const nomeDoUsuario = "Tiago Fernandes Ribeiro";

        
        if(nomeDoUsuario){
                const elementoPai = document.getElementsByClassName("hero")[0];
                const elementoReferencia = elementoPai.firstElementChild;

                const topBarElement = document.createElement("div");
                topBarElement.className = "top-bar";
                topBarElement.innerHTML = `<p>Olá, <b>${nomeDoUsuario} </b></p>`;
                
                elementoPai.insertBefore(topBarElement, elementoReferencia);
                
        }
})();