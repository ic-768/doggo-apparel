import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import FooterSection from "./footer-section";

interface SocialIconProps {
  children: React.ReactNode;
}
const SocialIcon = ({ children }: SocialIconProps) => (
  <div className="flex space-x-4">
    <a href="#" className="text-gray-400 transition-colors hover:text-white">
      {children}
    </a>
  </div>
);

export default function SocialLinks() {
  return (
    <FooterSection title="Follow Us">
      <div className="flex space-x-4">
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>
      </div>
    </FooterSection>
  );
}
