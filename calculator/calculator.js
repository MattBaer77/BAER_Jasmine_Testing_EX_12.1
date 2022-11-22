window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById("loan-amount");
  let loanYears = document.getElementById("loan-years");
  let loanRate = document.getElementById("loan-rate");

  loanAmount.value = 100000;
  loanYears.value = 10;
  loanRate.value = 0.03;

  let values = getCurrentUIValues();

  let monthly = calculateMonthlyPayment(values);

  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let calcPrinciple = values['amount'];
  let calcTotalPayments = values['years'] * 12;
  let calcPeriodicRate = values['rate'] / 12;

  if (calcPeriodicRate === 0){
    let calculatedMonthlyAtZero = calcPrinciple / calcTotalPayments;

    let calculatedMonthlyAtZeroRounded = calculatedMonthlyAtZero.toFixed(2);

    return calculatedMonthlyAtZeroRounded;

  }

  let calculatedMonthly = (calcPrinciple * calcPeriodicRate) / (1 -  ((1 + calcPeriodicRate) **  (-1 * calcTotalPayments)));

  let calculatedMonthlyRounded = calculatedMonthly.toFixed(2);

  return calculatedMonthlyRounded;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

  let calculatedMonthlyOutput = document.getElementById("monthly-payment");

  calculatedMonthlyOutput.innerText = monthly

}
