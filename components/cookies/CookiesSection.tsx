import type { ReactNode } from "react";
import { Cookie, Info, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  CookiesSection as CookiesSectionType,
  CookiesIcon,
  CookiesTheme,
} from "@/types/cookies-section";

interface CookiesSectionProps {
  section: CookiesSectionType;
  children: ReactNode;
};

const iconMap: Record<CookiesIcon, LucideIcon> = {
  Info,
  Settings,
  Cookie,
};

const themeStyles: Record<CookiesTheme, {
  bg:string;
  text:string;
  border:string;
  contentBorder:string;
}> = {
  blue:{
    bg:"bg-blue-50",
    text:"text-blue-600",
    border:"border-blue-100",
    contentBorder: "border-blue-100/40",
  },
  amber:{
    bg:"bg-amber-50",
    text:"text-amber-600",
    border:"border-amber-100",
    contentBorder: "border-amber-100/40",
  },
  indigo:{
    bg:"bg-indigo-50",
    text:"text-indigo-600",
    border:"border-indigo-100",
    contentBorder: "border-indigo-100/40",
  },
};


const CookiesSection = ({ section, children }: CookiesSectionProps) => {
    const Icon = iconMap[section.icon];
    const theme = themeStyles[section.theme];

  return (
            <section id={section.sectionId} className="scroll-mt-32 group">
                <div className="flex items-center gap-5 mb-8">
                    <div className={`w-14 h-14 rounded-[1.5rem] ${theme.bg} ${theme.text} flex items-center justify-center border ${theme.border} shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]`}>
                        <Icon className="w-7 h-7"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-foreground tracking-tight">{section.title}</h2>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{section.subtitle}</p>
                    </div>
                </div>
                <div className={`glass-morphism rounded-[2.5rem] p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 ${theme.contentBorder}`}>
                    {children}
                </div>
            </section>
        )
}

export default CookiesSection