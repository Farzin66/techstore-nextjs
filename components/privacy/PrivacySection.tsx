import type { ReactNode } from "react";
import { Eye, Lock, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  PrivacySection as PrivacySectionType,
  PrivacyIcon,
  PrivacyTheme,
} from "@/types/privacy-section";

interface PrivacySectionProps {
  section: PrivacySectionType;
  children: ReactNode;
};

const iconMap: Record<PrivacyIcon, LucideIcon> = {
  Eye,
  Lock,
  Shield,
};


const themeStyles: Record<PrivacyTheme, {
  bg: string;
  text: string;
  border: string;
}> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
};



const PrivacySection = ({ section, children }: PrivacySectionProps) => {
    const Icon = iconMap[section.icon];
    const theme = themeStyles[section.theme];

  return (
    <section id={section.sectionId} className="scroll-mt-32 group">
      <div className="flex items-center gap-5 mb-8">
        <div className={`w-14 h-14 rounded-[1.5rem] ${theme.bg} ${theme.text} flex items-center justify-center border ${theme.border} shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]`}>
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-foreground tracking-tight">
            {section.title}
          </h2>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
            {section.subtitle}
          </p>
        </div>
      </div>
      <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500">
        <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
          {section.description}
        </p>
        {children}
      </div>
    </section>
  );
};

export default PrivacySection;
