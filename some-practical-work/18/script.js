async function increaseSalaries(baseSalaries, increase) {
  let newSalaries = [];
  for (let baseSalary of baseSalaries) {
    newSalaries.push(
      await increaseSalary(baseSalary, increase);
    );
  }
  console.log(`New salaries: ${newSalaries}`);
  return newSalaries;
}

increaseSalaries([950, 800, 1000], 100);