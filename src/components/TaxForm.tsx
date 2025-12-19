import { useState, type FormEvent } from "react";

import { TextField } from "./TextField";
import { SelectInput } from "./SelectInput";

type Props = {
  loading: boolean;
  onSubmit: (income: number, year: number) => void;
};

export const TaxForm = ({ loading, onSubmit }: Props) => {
  const [year, setYear] = useState(2022);
  const [income, setIncome] = useState("");

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      onSubmit(Number(income), year);
    }
  };

  return (
    <form
      onSubmit={handleSumbit}
      className="w-full max-w-xl rounded-xl p-6 space-y-4 bg-white/95 backdrop-blur-sm"
    >
      <TextField
        value={income}
        type={"number"}
        label={"Annual income"}
        onChange={(e) => setIncome(e.target.value)}
      />

      <SelectInput
        value={year}
        label={"Tax year"}
        items={[2019, 2020, 2021, 2022]}
        onChange={(e) => setYear(Number(e.target.value))}
      />
      <button
        type="submit"
        disabled={loading}
        className={`
          w-full py-2 rounded-lg font-semibold transition
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }
        `}
      >
        {loading ? "Calculating..." : "Calculate"}
      </button>
    </form>
  );
};
