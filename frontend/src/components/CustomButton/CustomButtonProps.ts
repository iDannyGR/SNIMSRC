import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from "@headlessui/react";

// Tus variantes personalizadas
export type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "info";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

// Props que extienden las de Headless UI
export interface CustomButtonProps extends Omit<HeadlessButtonProps, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
