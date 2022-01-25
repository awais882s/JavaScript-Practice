console.log("Prototype Inheritance In JavaScrip");
const proto = {
  slogan: function () {
    return `this company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

const awais = Object.create(proto);

awais.name = "awais";
awais.role = "programmer";
awais.changeName("Awais882s");


const awais = Object.create(proto, {
  name: { value: "awais22" },
  role: { value: "lover and Developers" },
});
