const buttons = document.getElementsByClassName("buttonClass");
for (const button of buttons) {
  button.addEventListener("click", () => console.log("Clicked!"));
}
