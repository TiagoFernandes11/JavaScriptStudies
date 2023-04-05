function funcao(callback){
    console.log("Realizando um call back");
    typeof callback === "function" && callback();
}

funcao();
funcao(function(){
    console.log("funcao passada como parametro");
})