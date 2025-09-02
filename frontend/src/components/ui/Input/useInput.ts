import { useMemo } from "react";
import { InputState, InputSize } from "./Input.types";
import { getInputClasses, getLabelClasses, getHelperTextClasses } from "./Input.styles";

export const useInput = (
  state: InputState = "default",
  size: InputSize = "md",
  hasLeftIcon: boolean = false,
  hasRightIcon: boolean = false,
  className?: string
) => {
  const inputClasses = useMemo(
    () => getInputClasses(state, size, hasLeftIcon, hasRightIcon, className),
    [state, size, hasLeftIcon, hasRightIcon, className]
  );

  const labelClasses = useMemo(() => getLabelClasses(size, state), [size, state]);

  const helperTextClasses = useMemo(() => getHelperTextClasses(state), [state]);

  return {
    inputClasses,
    labelClasses,
    helperTextClasses
  };
};
