const array = [1, 2, 3];
const object = { message: "Hello!" };
const string = "Hello!";
const empty = null;

Array.isArray(array);
Array.isArray(object);
Array.isArray(string);
Array.isArray(empty);

array instanceof Array;
object instanceof Array;
string instanceof Array;
empty instanceof Array;

({}.toString.call(array)); // '[object Array]'
({}.toString.call(object));
({}.toString.call(string));
({}.toString.call(array) === "[object Array]"); //true
