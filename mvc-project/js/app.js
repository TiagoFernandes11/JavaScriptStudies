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

// preenche a tabela por aluno
document.querySelector("table thead").appendChild(htmlHeader);
alunos.forEach((aluno) => {
  const header = document.createElement("tr");
  header.innerHTML = "";
  header.innerHTML += "<td>" + aluno.nome + "</td>";
  for (let materia in aluno.media) {
    header.innerHTML += "<td>" + aluno.media[materia] + "</td>";
  }
  document.querySelector("table tbody").appendChild(header);
});
