import { instanceDB } from "../api/config";
import type { TaxAPIResponse } from "../models/tax.model";

export const getTaxBrackets = (year: number) => {
  return instanceDB.get<TaxAPIResponse>(`/tax-calculator/tax-year/${year}`);
};
