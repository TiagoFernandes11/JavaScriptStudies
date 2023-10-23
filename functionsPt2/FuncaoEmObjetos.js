const dog = {
  name: "rex",

  falar() {
    console.log(this.name, "diz auau");
  },

  comer() {
    console.log(this.name, "hmm Ração");
  },

  idade: 10,
};

dog.comer();
dog.falar();
