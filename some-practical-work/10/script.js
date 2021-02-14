let existingVar;
try {
  existingVar;
  console.log("existingVar is defined");
} catch (e) {
  console.log("existingVar is not defined");
}

//try/catch

function isObject(object) {
  return typeof object === "object" && object !== null;
}

isObject({ name: "Batman" }); // => true
isObject(15); // => false
isObject(null); // => false
