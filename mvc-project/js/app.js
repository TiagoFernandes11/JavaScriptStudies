// calcula media e adiciona atributo media para cada aluno em cada materia
alunos.forEach((aluno) => {
  aluno.media = {};
  for (let materia in aluno.notas) {
    aluno.media[materia] = avarege(...aluno.notas[materia]);
  }
});

// preenche o cabeçario da tabela de medias
const htmlHeader = document.createElement("tr");
htmlHeader.innerHTML = "<td>Nome</td>";

let htmlHeaderMaterias = Object.keys(alunos[0].notas)
  .map((materia) => {
    return "<td>" + materia + "</td>";
  })
  .join("");
htmlHeader.innerHTML += htmlHeaderMaterias;
document.querySelector("table thead").appendChild(htmlHeader);

// preenche a tabela por aluno
alunos.forEach((aluno) => {
  const htmlBody = document.createElement("tr");
  htmlBody.innerHTML = "<td>" + aluno.nome + "</td>";
  for (let materia in aluno.media) {
    htmlBody.innerHTML += "<td>" + aluno.media[materia] + "</td>";
  }
  document.querySelector("table tbody").appendChild(htmlBody);
});
