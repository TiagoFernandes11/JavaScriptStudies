class AlunosService {
  constructor() {
    this.alunos = [];
  }

  add(aluno) {
    if (!aluno instanceof AlunoModel) {
      throw new TypeError("aluno must be an instance of AlunoModel");
    }
    this.alunos.push(aluno);
  }

  edit(aluno) {
    console.log("edit method todo");
  }
}
