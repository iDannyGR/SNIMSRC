import { ButtonVariant, ButtonSize } from "./Button.types";
import { twMerge } from "tailwind-merge";

export const getButtonClasses = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
  disabled?: boolean
) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded shadow-slate-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-blue-900 text-white hover:bg-blue-950",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:red-blue-700",
    success: "bg-green-600 text-white hover:bg-green-700 ",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    info: "bg-cyan-600 text-white hover:bg-cyan-700",
    "outline-primary": "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    "outline-secondary": "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white",
    "outline-danger": "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-2.5",
    xl: "px-8 py-4 text-xl gap-3"
  };

  return twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
};

export const LoadingSpinner = () => (
  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
