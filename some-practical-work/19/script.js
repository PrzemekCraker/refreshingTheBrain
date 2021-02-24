async function increaseSalaries(baseSalaries, increase) {
  let salariesPromises = [];
  for (let baseSalary of baseSalaries) {
    salariesPromises.push(increaseSalary(baseSalary, increase));
  }
  const newSalaries = await Promise.all(salariesPromises);
  console.log(`New salaries: ${newSalaries}`);
  return newSalaries;
}

increaseSalaries([950, 800, 1000], 100);
