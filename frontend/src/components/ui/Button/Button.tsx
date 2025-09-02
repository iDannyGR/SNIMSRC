import { forwardRef } from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import { CustomButtonProps } from "./Button.types";
import { useButton } from "./useButton";
import { LoadingSpinner } from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const { buttonClasses } = useButton(variant, size, className, disabled || isLoading);

    return (
      <HeadlessButton ref={ref} disabled={disabled || isLoading} className={buttonClasses} {...props}>
        {isLoading && (
          <span className="flex items-center">
            <LoadingSpinner />
          </span>
        )}

        {!isLoading && leftIcon && <span className="flex items-center">{leftIcon}</span>}

        {children && <span className="flex items-center">{children}</span>}

        {rightIcon && !isLoading && <span className="flex items-center">{rightIcon}</span>}
      </HeadlessButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
