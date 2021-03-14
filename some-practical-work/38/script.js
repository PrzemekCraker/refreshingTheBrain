const person = {
  name: "John",
};

person.name || "Unknown";
person.job || "Unknown";

true && true; //true
true && false; //false
true || true; //true
true || false; //true
Boolean(false); //false
Boolean(0); //false
Boolean(""); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false
Boolean(true); //true
Boolean(4); //true
Boolean("Hello"); //true
Boolean({ name: "John" }); //true
