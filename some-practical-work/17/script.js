function* getNumbersRegular() {
  yield 1;
  yield 2;
}

const gen = getNumbersRegular();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: undefined, done: true }

const fetchMovies = async () => {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
};

fetchMovies().then((movies) => {
  // Movies fetched
});
