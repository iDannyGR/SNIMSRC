"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({ orientation = "horizontal", className, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={twMerge(
        "shrink-0 bg-gray-200 dark:bg-gray-300",
        orientation === "horizontal" ? "h-px w-full my-4" : "h-full w-px mx-4",
        className
      )}
      {...props}
    />
  );
}
