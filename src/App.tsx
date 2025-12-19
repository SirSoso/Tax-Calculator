import { TaxForm } from "./components/TaxForm";
import { TaxResults } from "./components/TaxResults";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/LoadingState";

import { useTaxCalculator } from "./hooks/useTaxCalculator";

export const App = () => {
  const { retry, calculate, loading, error, result } = useTaxCalculator();

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6
      bg-gradient-to-br from-sky-500 to-indigo-600"
    >
      <div
        className="w-full max-w-xl rounded-2xl p-6 space-y-6
        bg-white/80 backdrop-blur-lg shadow-2xl"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Tax Calculator
        </h1>
        <TaxForm onSubmit={calculate} loading={loading} />
        {loading && <LoadingState />}
        {error && <ErrorState message={error} onRetry={retry} />}
        {result && <TaxResults result={result} />}
      </div>
    </div>
  );
};
