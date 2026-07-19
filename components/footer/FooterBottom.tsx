import { footerBottomLinks } from "@/data/footer-bottom-links";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest gap-4">
      <p>© 2026 Techstore Innovation Lab. All rights reserved.</p>
      <div className="flex items-center gap-8 text-white/40">
        {
            footerBottomLinks.map(({id, href, label}) => (
            <Link key={id} href={href}>{label}</Link>
            ))
        }
      </div>
    </div>
  );
};

export default FooterBottom;
