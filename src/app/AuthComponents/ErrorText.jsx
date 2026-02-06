export default function ErrorText({ message, className = "" }) {
  if (!message) return null;

  return (
    <p
      role="alert"
      className={`
        mt-1.5
        text-xs
        font-medium
        text-red-500
        transition-opacity
        duration-200
        ${className}
      `}
    >
      {message}
    </p>
  );
}
