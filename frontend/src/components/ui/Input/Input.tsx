import { forwardRef } from "react";
import { Input as HeadslessInput } from "@headlessui/react";
import { InputProps } from "./Input.types";
import { useInput } from "./useInput";
import { IconWrapper } from "./Input.styles";
import { twMerge } from "tailwind-merge";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = "default",
      size = "md",
      type = "text",
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      leftElement,
      rightElement,
      fullWidth = true,
      className,
      wrapperClassName,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon);
    const currentState = disabled ? "disabled" : error ? "error" : state;

    const { inputClasses, labelClasses, helperTextClasses } = useInput(
      currentState,
      size,
      hasLeftIcon,
      hasRightIcon,
      className
    );

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={twMerge(fullWidth ? "w-full" : "w-auto", wrapperClassName)}>
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <IconWrapper position="left" state={currentState}>
              {leftIcon}
            </IconWrapper>
          )}

          {leftElement && !leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">{leftElement}</div>
          )}

          <HeadslessInput
            ref={ref}
            id={inputId}
            type={type}
            className={inputClasses}
            disabled={disabled || currentState === "disabled"}
            aria-invalid={currentState === "error"}
            aria-describedby={helperText || error ? `${inputId}-helper` : undefined}
            {...props}
          />

          {rightIcon && (
            <IconWrapper position="right" state={currentState}>
              {rightIcon}
            </IconWrapper>
          )}

          {rightElement && !rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">{rightElement}</div>
          )}
        </div>

        {(error || helperText) && (
          <p id={`${inputId}-helper`} className={helperTextClasses} role={error ? "alert" : "note"}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
