export default class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

const MONTHS = [
  'January', 'February', 'March','April', 'May',
  'June', 'July', 'August', 'September', 'October',
  'November', 'December'
];

function ensureDateInstance(date) {
  if (typeof date === 'string') {
    return new Date(date);
  }
  return date;
}

export function formatDate(date) {
  date = ensureDateInstance(date);
  const monthName = MONTHS[date.getMonth())];
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
}

let a = 1;
let b = 2;
[a, b] = [b, a];

a;
b;
