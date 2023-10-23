let nome = "let"; //não vai pro escopo global
var name = "var"; //vai para o escopo global

//a diferença só é notada no browser

function teste(str, n) {
  console.log(this.name);
  //console.log("let", this.nome);
  console.log(str, n);
}

teste.call({name : "Maria"}, "string", 200);
teste.apply({name : "João"},["3", 16]);

const teste2 = teste.bind({name : "Ester"})

teste2("Judia", 20);
