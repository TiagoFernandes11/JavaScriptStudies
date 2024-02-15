import { average } from "../calc.js";

export class AlunoModel {
  constructor({ nome, _id, notas } = { notas: {} }) {
    this._id = _id !== undefined ? _id : this.generateId();
    this.notas = notas;
    this.nome = nome;
    this.media = {};

    if (this._id > AlunoModel.maxId) {
      AlunoModel.maxId = this._id;
    }
    this.generateAverage();
  }

  generateId() {
    return AlunoModel.maxId + 1;
  }

  generateAverage() {
    for (let materia in this.notas) {
      this.media[materia] = average(...this.notas[materia]);
    }
  }
}

AlunoModel.maxId = 0;
