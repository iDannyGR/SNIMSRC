import { Textarea as HeadlessTextArea, type TextareaProps } from "@headlessui/react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = TextareaProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
  };

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ className, ...props }, ref) => {
  return (
    <HeadlessTextArea
      ref={ref}
      className={twMerge(
        "w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
});

TextArea.displayName = "Textarea";

export default TextArea;
