const hasValue = array.includes(value[, fromIndex]);

const letters = ['a', 'b', 'c', 'd'];

letters.includes('c', 1); //true
letters.includes('a', 1); //false

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}