const increaseNumber = (number) => number + 1;
increaseNumber.name;

const array = [1, 2, 3];
array.map((number) => number * 2);

const negativeToZero = (number) => (number <= 0 ? 0 : number);

array.map((number) => ({
  number: number,
  propA: "value A",
  propB: "value B",
}));

const handleButtonClick = async () => {
  const response = await fetch("/items.json");
  const json = await response.json();
  json.forEach((item) => console.log(item.name));
};

myButton.addEventListener("click", handleButtonClick);
