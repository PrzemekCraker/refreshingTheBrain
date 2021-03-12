const products = ["oranges", "apples"];

for (const [index, product] of products.entries()) {
  console.log(index, product);
}

const persons = [{ name: "John Smith" }, { name: "Jane Doe" }];

for (const { name } of persons) {
  console.log(name);
}

function sum() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}

sum(1, 2, 3);

const array = [1, 2, 3];
const iterator1 = array[Symbol.iterator]();
iterator1.next();

const message = "hello";
for (const character of message) {
  console.log(character);
}

const colors = new Set(["white", "blue", "red", "white"]);
for (color of colors) {
  console.log(color);
}

const allImages = document.querySelectorAll("img");
for (const image of allImages) {
  console.log(image); // log each image in the document
}
