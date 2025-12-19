export interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

export interface TaxAPIResponse {
  tax_brackets: TaxBracket[];
}

export interface TaxPerBand {
  range: string;
  amount: number;
}

export interface TaxResult {
  total: number;
  perBand: TaxPerBand[];
  effectiveRate: number;
}
