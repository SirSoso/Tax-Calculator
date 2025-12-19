import type { ChangeEvent } from "react";

type Props = {
  label: string;
  value: string | number;
  items: string[] | number[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectInput = ({ label, value, items, onChange }: Props) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="mt-1 w-full appearance-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {items.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-2 top-1 flex items-center">
        <svg
          className="h-4 w-4 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
);
