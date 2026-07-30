import Link from "next/link"
import Logo from "./Logo"
import { socialLinks } from "@/data/social-links"
import CatalogLinks from "../footer/CatalogLinks"
import SupportLinks from "../footer/SupportLinks"
import NewsletterForm from "../footer/NewsletterForm"
import FooterInfo from "../footer/FooterInfo"
import FooterBottom from "../footer/FooterBottom"
 

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-40 -mt-40 blur-3xl"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Logo techColor = "text-white" storeColor="text-primary"/>
            <p className="text-sm leading-relaxed max-w-xs">Empowering your digital lifestyle with high-performance hardware and futuristic innovation. Your trusted partner in tech excellence since 2024.</p>
            <div className="flex items-center gap-4">
              {
                socialLinks.map(({ id, icon: Icon })=>(
                  <Link href="" key={id} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon/>
                  </Link>
                ))
              }
            </div>
          </div>         
          <CatalogLinks/>
          <SupportLinks/>
          <NewsletterForm/>
        </div>
        <FooterInfo/>
        <FooterBottom/>
      </div>
    </footer>
  )
}

export default Footer