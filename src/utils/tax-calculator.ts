import type { TaxBracket, TaxPerBand, TaxResult } from "../models/tax.model";

export const calculateTaxes = (
  income: number,
  brackets: TaxBracket[]
): TaxResult => {
  let remaining = income;
  let total = 0;
  const perBand: TaxPerBand[] = [];

  for (const bracket of brackets) {
    if (remaining <= 0) break;

    const max = bracket.max ?? Infinity;
    const taxable = Math.min(remaining, max - bracket.min);

    const tax = taxable * bracket.rate;
    total += tax;
    remaining -= taxable;

    perBand.push({
      range: `${bracket.min} - ${bracket.max ?? "∞"}`,
      amount: tax,
    });
  }

  return {
    total,
    perBand,
    effectiveRate: income > 0 ? total / income : 0,
  };
};
