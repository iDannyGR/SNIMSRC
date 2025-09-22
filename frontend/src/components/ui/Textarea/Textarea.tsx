import { Textarea as HeadlessTextArea } from "@headlessui/react";
import { forwardRef } from "react";
import clsx from "clsx";


const Textarea = forwardRef<HTMLTextAreaElement>(
  ({className,...props }, ref) => {
    return (
        <HeadlessTextArea
        ref={ref}
        disabled={disabled}
        className={clsx(
          "w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500",
          disabled && "cursor-not-allowed bg-gray-100 opacity-50",
        className )}
        {...props}
      />
    );
  } 