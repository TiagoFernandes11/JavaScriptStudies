class EditAlunoController {
  constructor(model, view, service) {
    this.model = model;
    this.view = view;
    this.service = service;
    this.view.render(model);
  }

  edit(aluno, nome) {
    aluno.nome = nome;

    this.service.edit(aluno, notas);
  }
}
