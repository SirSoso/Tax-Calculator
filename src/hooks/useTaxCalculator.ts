import { useRef, useState } from "react";

import type { TaxResult } from "../models/tax.model";

import { getTaxBrackets } from "../services/tax-service";

import { calculateTaxes } from "../utils/tax-calculator";

type TaxCalculatorState = {
  loading: boolean;
  error: string | null;
  result: TaxResult | null;
};

type TaxCalculatorRef = { income: number; year: number } | null;

export const useTaxCalculator = () => {
  const lastRequest = useRef<TaxCalculatorRef>(null);
  const [state, setState] = useState<TaxCalculatorState>({
    error: null,
    result: null,
    loading: false,
  });

  const setError = (error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  };

  const setLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  const setResult = (result: TaxResult | null) => {
    setState((prev) => ({ ...prev, result }));
  };

  const retry = () => {
    if (lastRequest.current) {
      calculate(lastRequest.current.income, lastRequest.current.year);
    }
  };

  const calculate = async (income: number, year: number) => {
    try {
      setLoading(true);
      setError(null);
      lastRequest.current = { income, year };

      const { data } = await getTaxBrackets(year);
      const calculation = calculateTaxes(income, data.tax_brackets);

      setResult(calculation);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("The tax service is temporarily unavailable");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    retry,
    calculate,
    error: state.error,
    result: state.result,
    loading: state.loading,
  };
};
