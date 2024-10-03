import FooterSection from "./footer-section";

const Link = ({ children }: { children: React.ReactNode }) => (
  <li>
    <a href="#" className="text-gray-400 transition-colors hover:text-white">
      {children}
    </a>
  </li>
);

export default function QuickLinks() {
  return (
    <FooterSection title="Quick Links">
      <ul>
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </ul>
    </FooterSection>
  );
}
