import type { TaxResult } from "../models/tax.model";

type Props = {
  result: TaxResult;
};

export const TaxResults = ({ result }: Props) => (
  <div className="bg-gray-50 rounded-xl p-4 space-y-4">
    <div className="text-center">
      <p className="text-sm text-gray-500">Total Taxes</p>
      <p className="text-2xl font-bold text-gray-800">
        ${result.total.toFixed(2)}
      </p>
      <p className="text-sm text-gray-600">
        Effective rate: {(result.effectiveRate * 100).toFixed(2)}%
      </p>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Taxes per band
      </h3>

      <ul className="space-y-2">
        {result.perBand.map((taxPerBand, i) => (
          <li
            key={i}
            className="flex justify-between text-sm bg-white p-2 rounded-lg border"
          >
            <span>{taxPerBand.range}</span>
            <span className="font-medium">${taxPerBand.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
