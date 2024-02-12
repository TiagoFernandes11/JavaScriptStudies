class AlunoModel {
  constructor({ nome, _id, notas } = { notas: {} }) {
    this._id = _id !== undefined ? _id : this.generateId();
    this.nome = nome;
    this.media = {};

    if (this._id > AlunoModel.maxId) {
      AlunoModel.maxId = this._id;
    }

    for (let materia in this.notas) {
      this.media[materia] = average(...this.notas[materia]);
    }
  }

  generateId() {
    return AlunoModel.maxId + 1;
  }
}

AlunoModel.maxId = 0;
