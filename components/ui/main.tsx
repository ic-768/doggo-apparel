import { twMerge } from "tailwind-merge";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Main({ className, ...props }: MainProps) {
  const classes = twMerge(
    "bg-blue-50 flex flex-col gap-8 py-4 px-8 grow",
    className,
  );
  return <main className={classes} {...props} />;
}
