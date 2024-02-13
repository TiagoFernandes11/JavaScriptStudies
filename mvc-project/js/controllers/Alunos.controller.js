class AlunosController {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    view.render(service.alunos);
  }

  add(aluno) {
    this.service.add(new AlunoModel(aluno));
    this.view.render(this.service.alunos);
  }
}
