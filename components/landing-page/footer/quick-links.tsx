import FooterSection from "./footer-section";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}
const Link = ({ children, href }: LinkProps) => (
  <li>
    <a href={href} className="text-gray-400 transition-colors hover:text-white">
      {children}
    </a>
  </li>
);

export default function QuickLinks() {
  return (
    <FooterSection title="Quick Links">
      <ul>
        <Link href="/">Home</Link>
        <Link href="/browse">Shop</Link>
        <Link href="/about-us">About</Link>
      </ul>
    </FooterSection>
  );
}
