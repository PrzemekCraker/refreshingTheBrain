async function fetchMovies() {
  const response = await fetch("https://example.com/movies");
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies = await response.json();
  return movies;
}
