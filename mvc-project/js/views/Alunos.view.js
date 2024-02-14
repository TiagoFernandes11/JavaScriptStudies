class AlunosView {
  constructor(table, materias) {
    this.tableList = table;
    this.tableHeader = this.tableList.querySelector("thead");
    this.tableBody = this.tableList.querySelector("tbody");
    this.materias = materias;

    this.renderHeader();
  }

  renderHeader() {
    const htmlHeader = document.createElement("tr");
    htmlHeader.innerHTML = "<td>Nome</td>";

    let htmlHeaderMaterias = this.materias
      .map((materia) => {
        return "<td>" + materia + "</td>";
      })
      .join("");
    htmlHeader.innerHTML += htmlHeaderMaterias;
    document.querySelector("table thead").appendChild(htmlHeader);
  }

  render(alunos) {
    document.querySelector("table tbody").innerHTML = "";
    alunos.forEach((aluno) => {
      const htmlBody = document.createElement("tr");
      htmlBody.innerHTML = "<td>" + aluno.nome + "</td>";
      this.materias.forEach((materia) => {
        htmlBody.innerHTML +=
          "<td>" +
          (aluno.media[materia] !== undefined
            ? aluno.media[materia]
            : `<a href=edit.html?id=${aluno._id}> incluir nota </a>`) +
          "</td>";
      });
      this.tableBody.appendChild(htmlBody);
    });
  }
}
