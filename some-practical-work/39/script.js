function sum(a, b) {
  console.log(b);
  return a + b;
}
sum(1, 2);
sum(4, 5);

function sum1(a, b) {
  console.log({ b });
  return a + b;
}
sum1(1, 2);
sum1(4, 5);

const user = "john_smith";
const attempts = 5;
console.log("%s failed to login %i times", user, attempts);

const myObject = {
  name: "John Smith",
  profession: "agent",
};
console.log(myObject);

const myObject1 = {
  name: "John Smith",
  profession: "agent",
};
console.log("Neo, be aware of %o", myObject1);

const myObject3 = {
  propA: {
    propB: {
      propC: {
        propD: "hello",
      },
    },
  },
};
console.log(JSON.stringify(myObject3, null, 2));

const myObject4 = {
  propA: {
    propB: {
      propC: {
        propD: "hello",
      },
    },
  },
};
console.dir(myObject4, { depth: null });
