import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  value: string | number;
  type?: HTMLInputTypeAttribute | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = ({
  label,
  value,
  onChange,
  type = undefined,
}: Props) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g. 50000"
    />
  </div>
);
