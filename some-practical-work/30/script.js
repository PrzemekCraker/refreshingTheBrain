const myObject = {
  myProp: "Value",
};

myObject.myProp;

const myObject1 = {
  myProp: "Value",
};

Object.getOwnPropertyNames(myObject1);

const myObject2 = {
  myProp: "Value",
};

const myObjectProto = Object.getPrototypeOf(myObject2);

myObject2.toString === myObjectProto.toString; // t

const myObject3 = {
  myProp: "Value",
  toString() {
    return `[object MyObject3]`;
  },
};
// Own properties
myObject3.toString(); //'[object MyObject]'
myObject3.myProp; //'Value'
delete myObject3.toString;
delete myObject3.myProp;

// Inherited property
myObject3.toString(); // '[object Object]'
// No inherited property
myObject3.myProp; //undefined
