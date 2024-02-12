const alunos = [
  {
    _id: 0,
    nome: "chico melato",
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [2, 2, 3, 3],
      ciencias: [3, 3, 3, 3],
    },
  },
  {
    _id: 1,
    nome: "talita lima",
    notas: {
      portugues: [4, 4, 4, 4],
      matematica: [4, 4, 5, 5],
      historia: [5, 5, 6, 6],
      ciencias: [7, 7, 8, 9],
    },
  },
];

const alunoService = new AlunosService();

// calcula media e adiciona atributo media para cada aluno em cada materia
alunos.forEach((aluno) => {
  alunoService.add(new AlunoModel(aluno));
});

// // preenche o cabeçario da tabela de medias
// const htmlHeader = document.createElement("tr");
// htmlHeader.innerHTML = "<td>Nome</td>";

// let htmlHeaderMaterias = Object.keys(alunos[0].notas)
//   .map((materia) => {
//     return "<td>" + materia + "</td>";
//   })
//   .join("");
// htmlHeader.innerHTML += htmlHeaderMaterias;
// document.querySelector("table thead").appendChild(htmlHeader);

// // preenche a tabela por aluno
// function render() {
//   document.querySelector("table tbody").innerHTML = "";
//   alunos.forEach((aluno) => {
//     const htmlBody = document.createElement("tr");
//     htmlBody.innerHTML = "<td>" + aluno.nome + "</td>";
//     for (let materia in aluno.media) {
//       htmlBody.innerHTML += "<td>" + aluno.media[materia] + "</td>";
//     }
//     document.querySelector("table tbody").appendChild(htmlBody);
//   });
// }
// render();

// // adicionando alunos
// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const nome = document.getElementById("first_name").value;
//   const novoAluno = {
//     _id: 3,
//     nome,
//     notas: {
//       portugues: [1, 1, 2, 2],
//       matematica: [2, 2, 2, 2],
//       historia: [2, 2, 3, 3],
//       ciencias: [3, 3, 3, 3],
//     },
//   };

//   novoAluno.media = {};
//   for (let materia in novoAluno.notas) {
//     novoAluno.media[materia] = average(...novoAluno.notas[materia]);
//   }
//   alunos.push(novoAluno);
//   render();
// });
