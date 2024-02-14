class AlunosService {
  constructor() {
    this.alunos = [];
    this.updateAlunosListFromLocalStorage();
  }

  add(aluno) {
    if (!aluno instanceof AlunoModel) {
      throw new TypeError("aluno must be an instance of AlunoModel");
    }
    this.alunos.push(aluno);
    this.updateLocalStorage();
  }

  edit(aluno) {
    aluno.generateAverage();
    this.updateLocalStorage();
  }

  searchById(id) {
    return this.alunos.find((aluno) => {
      return aluno._id === id;
    });
  }

  updateLocalStorage() {
    const alunos = JSON.stringify(this.alunos);
    localStorage.setItem("alunos", alunos);
  }

  updateAlunosListFromLocalStorage() {
    const local = localStorage.getItem("alunos");
    if (local) {
      const alunoObj = JSON.parse(local);
      alunoObj.forEach((aluno) => {
        this.add(new AlunoModel(aluno));
      });
    }
  }
}
