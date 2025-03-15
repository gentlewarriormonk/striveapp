
import { cn } from "@/lib/utils";
import React from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          {
            "bg-[#1a2236] text-strive-blue": variant === "primary",
            "bg-white/10 text-white": variant === "default",
            "bg-secondary text-secondary-foreground": variant === "secondary",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
            "px-2.5 py-0.5 text-xs": size === "sm",
            "px-3 py-1 text-sm": size === "md",
            "px-4 py-2": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Chip.displayName = "Chip";

export { Chip };
