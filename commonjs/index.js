const fileSistem = require("fs");
const emoji = require("node-emoji");
const teste = require("./modules/mod1");
fileSistem.writeFile(
  "teste.txt",
  teste.teste + emoji.random().emoji,
  (err) => {
    if (err) throw err;
    console.log("Saved!", emoji.get("coffee"));
  }
);
