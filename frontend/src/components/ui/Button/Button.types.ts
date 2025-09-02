import { ReactNode } from "react";
import { ButtonProps as HeadlessButtonProps } from "@headlessui/react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "outline-primary"
  | "outline-secondary"
  | "outline-danger";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface CustomButtonProps extends Omit<HeadlessButtonProps, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
