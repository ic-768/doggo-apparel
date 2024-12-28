import { twMerge } from "tailwind-merge";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Main({ className, ...props }: MainProps) {
  const classes = twMerge(
    "bg-blue-50 flex flex-col gap-8 pt-28 pb-4 px-8 grow w-full items-center",
    className,
  );
  return <main className={classes} {...props} />;
}
