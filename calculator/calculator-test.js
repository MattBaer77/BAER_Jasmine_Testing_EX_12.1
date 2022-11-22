
it('should calculate the monthly rate correctly - including rate of 0', function () {
  // ...
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.03 })).toEqual("965.61")
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0 })).toEqual("833.33")
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 1 })).toEqual("8333.89")
  expect(calculateMonthlyPayment({ amount: 1, years: 10, rate: 1 })).toEqual("0.08")
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.03 }).length).toEqual(6);
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.03 })).toContain(".");
  expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 1 }).length).toEqual(4);
  expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 1 })).toContain(".");
});

/// etc
