type Props = {
  message?: string;
  onRetry?: () => void;
};

export const ErrorState = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}: Props) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center space-y-3">
      <div className="text-red-500 text-2xl">⚠️</div>

      <p className="text-sm text-red-700">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          Try again
        </button>
      )}
    </div>
  );
};
