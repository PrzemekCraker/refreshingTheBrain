const books = {
  "The Shining": 5.5,
  "Harry Potter and the Goblet of Fire": 10.0,
  1984: 4.35,
};

const prices = Object.values(books);

prices;

const sum = prices.reduce((sum, price) => sum + price);

sum;

const books = {
  "The Shining": 5.5,
  "Harry Potter and the Goblet of Fire": 10.0,
  1984: 0,
};

for (const [book, price] of Object.entries(books)) {
  if (price === 0) {
    console.log(book);
  }
}
