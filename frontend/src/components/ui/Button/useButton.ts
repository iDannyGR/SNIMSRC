import { useMemo } from "react";
import { ButtonVariant, ButtonSize } from "./Button.types";
import { getButtonClasses } from "./Button.styles";

export const useButton = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
  disabled?: boolean
) => {
  const buttonClasses = useMemo(
    () => getButtonClasses(variant, size, className, disabled),
    [variant, size, className, disabled]
  );

  return {
    buttonClasses
  };
};
