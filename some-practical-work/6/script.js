// Examples of synchronous callbacks on arrays
const persons = ["Ana", "Elena"];

persons.forEach(function callback(name) {
  console.log(name);
});
// logs 'Ana'
// logs 'Elena'

const nameStartingA = persons.find(function callback(name) {
  return name[0].toLowerCase() === "a";
});
nameStartingA; // => 'Ana'

const countStartingA = persons.reduce(function callback(count, name) {
  const startsA = name[0].toLowerCase() === "a";
  return startsA ? count + 1 : count;
}, 0);
countStartingA; // => 1
