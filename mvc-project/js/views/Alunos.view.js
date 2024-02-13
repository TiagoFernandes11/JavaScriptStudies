class AlunosView {
  constructor(table) {
    this.tableList = table;
    this.tableHeader = this.tableList.querySelector("thead");
    this.tableBody = this.tableList.querySelector("tbody");
    this.materias = ["portugues", "matematica", "historia", "ciencias"];

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
      Object.keys(aluno.media).forEach((materia) => {
        htmlBody.innerHTML += "<td>" + aluno.media[materia] + "</td>";
      });
      this.tableBody.appendChild(htmlBody);
    });
  }
}
