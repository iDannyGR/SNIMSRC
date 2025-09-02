import { InputHTMLAttributes, ReactNode } from "react";

export type InputState = "default" | "error" | "success" | "warning" | "disabled";

export type InputSize = "sm" | "md" | "lg";
export type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  state?: InputState;
  size?: InputSize;
  type?: InputType;
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  wrapperClassName?: string;
}
