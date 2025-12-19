type Props = {
  message?: string;
};

export const LoadingState = ({ message = "Calculating taxes..." }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
};
