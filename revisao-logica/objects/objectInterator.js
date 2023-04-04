const outraPessoa = {
    nome:"tiago",
    idade:"24",
    apelido:"tiaguinho"
};


for(let prop in outraPessoa){
    console.log(prop + " = " + outraPessoa[prop]);
}