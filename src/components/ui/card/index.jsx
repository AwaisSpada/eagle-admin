import React from "react";

// Card component with Tailwind styling
const Card = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 ${className}`}
      {...props}
    />
  );
});

Card.displayName = "Card";

// CardContent component with Tailwind styling
const CardContent = React.forwardRef(({ className = "", ...props }, ref) => {
  return <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />;
});

CardContent.displayName = "CardContent";

// Additional card-related components
const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  );
});

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
});

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}
        {...props}
      />
    );
  },
);

CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    />
  );
});

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
};
