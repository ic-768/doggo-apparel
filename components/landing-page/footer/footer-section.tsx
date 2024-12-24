interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:mb-0">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}
