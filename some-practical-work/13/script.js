function outerFunc() {
  // the outer scope
  let outerVar = "I am outside!";

  function innerFunc() {
    // the inner scope
    console.log(outerVar);
  }

  innerFunc();
}

outerFunc();
