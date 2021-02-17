async function fetchMovies() {
  const response = await fetch("/movies");
  // waits until the request completes...
  console.log(response);
}

async function fetchMoviesJSON() {
  const response = await fetch("/movies");
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then((movies) => {
  movies; // fetched movies
});
