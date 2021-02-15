setTimeout(function timeout() {
  console.log("Timed out!");
}, 0);

Promise.resolve(1).then(function resolve() {
  console.log("Resolved!");
});

function calculateTotalSalary(weeksHours, ratePerHour) {
  let totalSalary = 0;
  for (const weekHours of weeksHours) {
    const weeklySalary = weekHours * ratePerHour;
    totalSalary += weeklySalary;
  }
  return totalSalary;
}
