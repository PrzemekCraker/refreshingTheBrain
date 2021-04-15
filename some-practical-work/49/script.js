const search = " ";
const replaceWith = "-";

const result = "duck duck go".split(search).join(replaceWith);

result;

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

replaceAll("abba", "a", "i"); // 'ibbi'
replaceAll("go go go!", "go", "move"); // 'move move move!'
replaceAll("oops", "z", "y"); // 'oops'

const searchRegExp = /\s/g;

const result1 = "duck duck go".replace(searchRegExp, replaceWith);
result1; //'duck-duck-go'

const searchRegExp1 = /duck/gi;
const replaceWith1 = "goose";

const result2 = "DUCK Duck go".replace(searchRegExp1, replaceWith1);
result2;

const search = " ";

const result3 = "duck duck go".replace(search, replaceWith);
result3; // 'duck-duck go'

const result4 = "duck duck go".replaceAll(search, replaceWith);
result4;
