import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center p-[3px] overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-backgroundtext-neutral-50 rounded-lg group focus:ring-4 focus:outline-none focus:ring-blue-300",

  {
    variants: {
      variant: {
        default: "",
        browser: "bg-neutral-950",
        primary: "bg-neutral-50 text-primary-foreground hover:text-neutral-950",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-neutral-300 hover:text-accent-foreground",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLink?: boolean;
  href?: string; // For the <a> tag when isLink is true
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLink = false,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : isLink ? "a" : "button"; // Conditionally render <a> or <button>

    const withSpan =
      variant === "primary" || variant === "browser" || variant === "secondary";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(isLink ? { href } : {})} // Pass href only if it's a link
        {...props}
      >
        {withSpan ? (
          <span className="flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-opacity-0">
            {children}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
