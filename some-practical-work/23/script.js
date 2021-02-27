const hero = {
  name: "Batman",
  city: "Gotham",
};

const heroClone = Object.assign({}, hero);

heroClone;

hero === heroClone; //false

const heroClone2 = Object.assign({}, hero, { name: "Batman Clone" });

heroClone2;
