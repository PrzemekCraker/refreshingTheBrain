const colors = ['red', 'blue', 'white'];

for (let i = 0, var l = colors.length; i < l; i++) {
  console.log(colors[i]);
}
console.log(l);
console.log(i);

// ES2015
{
  function hello() {
    return 'Hello!';
  }
}
hello();

import { myFunc } from 'myModule';
if (true) {
  myFunc();
}

let p = 1;
function myFunc(q = p + 1) {
  return q;
}
myFunc();