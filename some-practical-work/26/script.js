const url1 = new URL("https://example.com/movies");
const url2 = new URL("https://example.com/movies?");

url1.search;
url2.search;

const url = new URL("http://red.com/path/index.html");

url.href;

url.hostname = "blue.io";

url.href;

url.pathname;

url.hash;

try {
  const url = new URL("http ://example.com");
} catch (error) {
  error;
}
