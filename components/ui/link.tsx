import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}
export default function Link({ className, ...props }: LinkProps) {
  const classes = twMerge(
    "text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors",
    className,
  );

  return <NextLink className={classes} {...props} />;
}
