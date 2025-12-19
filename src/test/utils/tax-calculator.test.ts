import { calculateTaxes } from "../../utils/tax-calculator";

describe("calculateTaxes", () => {
  it("should calculate total and effective rate correctly", () => {
    const brackets = [
      { min: 0, max: 10000, rate: 0.1 },
      { min: 10000, max: 20000, rate: 0.2 },
      { min: 20000, rate: 0.3 },
    ];

    const result = calculateTaxes(25000, brackets);

    expect(result.total).toBeCloseTo(10000 * 0.1 + 10000 * 0.2 + 5000 * 0.3);
    expect(result.effectiveRate).toBeCloseTo(result.total / 25000);
  });
});
