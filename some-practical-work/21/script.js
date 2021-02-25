async function fetchMovies404() {
  const response = await fetch("/oops");

  response.ok; // => false
  response.status; // => 404

  const text = await response.text();
  return text;
}

fetchMovies404().then((text) => {
  text; // => 'Page not found'
});

async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch("/movies"),
    fetch("/categories"),
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();

  return [movies, categories];
}

fetchMoviesAndCategories()
  .then(([movies, categories]) => {
    movies; // fetched movies
    categories; // fetched categories
  })
  .catch((error) => {
    // request failed
  });
