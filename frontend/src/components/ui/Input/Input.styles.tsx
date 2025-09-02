import { InputState, InputSize } from "./Input.types";
import { twMerge } from "tailwind-merge";

export const getInputClasses = (
  state: InputState = "default",
  size: InputSize = "md",
  hasLeftIcon: boolean = false,
  hasRightIcon: boolean = false,
  className?: string
) => {
  const baseClasses =
    "w-full border rounded-md focus:outline-0  disabled:opacity-50";

  const stateClasses: Record<InputState, string> = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400",
    error:
      "border-red-500 focus:border-red-500 focus:ring-red-500 placeholder:text-red-300 text-red-900",
    success:
      "border-green-500 focus:border-green-500 focus:ring-green-500 placeholder:text-green-300 text-green-900",
    warning:
      "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500 placeholder:text-yellow-300 text-yellow-900",
    disabled: "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
  };

  const sizeClasses: Record<InputSize, string> = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg"
  };

  const paddingClasses = {
    left: hasLeftIcon ? "pl-10" : "",
    right: hasRightIcon ? "pr-10" : ""
  };

  return twMerge(
    baseClasses,
    stateClasses[state],
    sizeClasses[size],
    paddingClasses.left,
    paddingClasses.right,
    className
  );
};

export const getLabelClasses = (size: InputSize = "md", state: InputState = "default") => {
  const sizeClasses: Record<InputSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const stateClasses: Record<InputState, string> = {
    error: "text-red-700",
    success: "text-green-700",
    warning: "text-yellow-700",
    default: "text-gray-700",
    disabled: "text-gray-500"
  };

  return twMerge("block font-medium mb-1", sizeClasses[size], stateClasses[state]);
};

export const getHelperTextClasses = (state: InputState = "default") => {
  const stateClasses: Record<InputState, string> = {
    error: "text-red-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    default: "text-gray-500",
    disabled: "text-gray-400"
  };

  return twMerge("text-sm mt-1", stateClasses[state]);
};

export const IconWrapper = ({
  children,
  position,
  state = "default"
}: {
  children: React.ReactNode;
  position: "left" | "right";
  state?: InputState;
}) => {
  const stateColors: Record<InputState, string> = {
    default: "text-gray-400",
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    disabled: "text-gray-300"
  };

  return (
    <div
      className={twMerge(
        "absolute inset-y-0 flex items-center pointer-events-none",
        position === "left" ? "left-0 pl-3" : "right-0 pr-3",
        stateColors[state]
      )}
    >
      {children}
    </div>
  );
};
