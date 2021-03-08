const hero = {
  name: "Batman",
  realName: "Bruce Wayne",
  address: {
    city: "Gotham",
  },
};

const { name, realName } = hero;

realName;

const { enemies = ["Joker"] } = hero;

enemies;

const { realName: secretName } = hero;

secretName;

const {
  address: { city },
} = hero;

city;

const prop = "name";
const { [prop]: name } = hero;

const { name, ...realHero } = hero;

realHero;

for (const { name } of heroes) {
  console.log(name);
}

const names = heroes.map(function ({ name }) {
  return name;
});

names;
