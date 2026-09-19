import Logo from "./Logo";
import { socialLinks } from "@/data/social-links";
import CatalogLinks from "../footer/CatalogLinks";
import SupportLinks from "../footer/SupportLinks";
import NewsletterForm from "../footer/NewsletterForm";
import FooterInfo from "../footer/FooterInfo";
import FooterBottom from "../footer/FooterBottom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] pt-24 pb-12 text-gray-400">
      <div className="absolute left-0 top-0 -ml-40 -mt-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <Logo techColor="text-white" storeColor="text-primary" />

            <p className="max-w-xs text-sm leading-relaxed">
              Empowering your digital lifestyle with high-performance hardware
              and futuristic innovation. Your trusted partner in tech
              excellence since 2024.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ id, icon: Icon }) => (
                <div
                  key={id}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          <CatalogLinks />
          <SupportLinks />
          <NewsletterForm />
        </div>

        <FooterInfo />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

