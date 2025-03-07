// Function to calculate electricity bill
function calculateBill(units) {
  let totalBill = 0;

  // Rate structure (example rates)
  if (units <= 50) {
    totalBill = units * 3.5; // Rate for first 50 units
  } else if (units <= 150) {
    totalBill = 50 * 3.5 + (units - 50) * 4.0; // Rate for next 100 units
  } else if (units <= 250) {
    totalBill = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2; // Rate for next 100 units
  } else {
    totalBill = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + (units - 250) * 6.5; // Rate for units above 250
  }

  return totalBill.toFixed(2); // Round to 2 decimal places
}

// Handle form submission
document.getElementById("billForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input value
  const units = parseFloat(document.getElementById("units").value);

  // Validate input
  if (isNaN(units)) {
    alert("Please enter a valid number of units.");
    return;
  }

  // Calculate bill
  const bill = calculateBill(units);

  // Display result
  document.getElementById("result").innerHTML = `Total Bill: ₹${bill}`;
});