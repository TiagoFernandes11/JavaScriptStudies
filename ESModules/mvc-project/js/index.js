import { AlunosService } from "./services/Alunos.service.js";
import { MateriasService } from "./services/Materias.service.js";
import { AlunosView } from "./views/Alunos.view.js";
import { AlunosController } from "./controllers/Alunos.controller.js";

const alunoService = new AlunosService();

const alunosView = new AlunosView(
  document.querySelector("[alunos-table]"),
  new MateriasService().materias
);

const alunosController = new AlunosController(alunoService, alunosView);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("first_name").value;
  alunosController.add({ nome });
});
