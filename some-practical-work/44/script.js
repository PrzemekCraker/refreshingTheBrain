const weirdObject = {
  "prop-3": "three",
  3: "three",
};

weirdObject["prop-3"];
weirdObject[3];

const property = "name";
const hero = {
  name: "Batman",
};

// Square brackets property accessor:
hero["name"];
hero[property];

// Object destructuring:
const { name } = hero;
name;

const { name: heroName } = hero;
heroName;

const { [property]: name } = hero;
name;

const hero2 = {
  characterName: "Batman",
};

hero2.name2; // und
hero2["name2"]; // und
const { name } = hero2;
name2; // und
