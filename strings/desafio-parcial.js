function mascararNumero(numero) {
  let posicaoHifen = numero.indexOf("-");
  let primeirosDigitos = numero.slice(0, posicaoHifen);
  let ultimosDigitos = numero.slice(posicaoHifen + 1);

  return (
    primeirosDigitos[0].padEnd(5, "*") +
    "-" +
    ultimosDigitos.slice(2).padStart(4, "*")
  );
}

console.log(mascararNumero("99999-5979"));
