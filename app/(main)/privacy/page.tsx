import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Mail,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { privacySections } from "@/data/privacySections";
import PrivacySection from "@/components/privacy/PrivacySection";
import { privacyCollection } from "@/data/privacyCollection";
import { privacySecurity } from "@/data/privacySecurity";
import { privacyControl } from "@/data/privacyControl";

const page = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20">
      <div className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-gray-100">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Hero */}
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-primary/20 shadow-sm">
              <Shield className="w-[14px] h-[14px] animate-pulse" />
              <span>Identity Protection Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
              Privacy <span className="text-primary italic">Matters.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Our commitment to your data security is absolute. We handle your
              information with the same integrity we bring to our hardware.
            </p>
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
              <span className="flex items-center gap-1.5">
                <CircleCheck className="w-[12px] h-[12px] text-primary" />
                GDPR Compliant
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Updated April 5, 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-start">
          {/* Sidebar */}
          <aside className="sticky top-32 hidden lg:block space-y-8">
            <nav className="space-y-2">
              {privacySections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                    section.id === 1
                      ? "bg-primary text-white shadow-lg shadow-primary/25 translate-x-2"
                      : "hover:bg-gray-50 text-gray-500"
                  }`}
                >
                  <span className="text-sm font-bold tracking-tight">
                    {section.navTitle}
                  </span>
                  <ChevronRight className="w-[12px] h-[12px] transition-transform duration-300 rotate-90" />
                </button>
              ))}
            </nav>
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Need Clarity?
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Our legal team is available for any specific data inquiries you
                may have.
              </p>
              <Link
                href="mailto:privacy@techstore.com"
                className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all"
              >
                Email Support
                <ArrowRight className="w-[14px] h-[14px]" />
              </Link>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-24">
            {privacySections.map((section) => (
              <PrivacySection key={section.id} section={section}>
                {section.id === 1 && (
                  <div className="grid sm:grid-cols-2 gap-12">
                    <ul className="space-y-4">
                      {privacyCollection.map((item) => (
                        <li key={item.title} className="flex gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                          <div>
                            <span className="block text-sm font-black text-foreground uppercase tracking-tight">
                              {item.title}
                            </span>
                            <span className="text-sm text-gray-500 font-medium">
                              {item.description}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50 flex flex-col justify-center text-center space-y-4">
                      <div className="text-4xl font-black text-blue-600">
                        Zero
                      </div>
                      <p className="text-sm text-blue-600/70 font-bold uppercase tracking-widest leading-tight">
                        Third Party
                        <br />
                        Data Sales
                      </p>
                      <div className="pt-4 text-[10px] text-blue-400 font-medium">
                        Your data stays within the Tech-Store ecosystem. Always.
                      </div>
                    </div>
                  </div>
                )}
                {section.id === 2 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {privacySecurity.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50"
                        >
                          <Icon className="text-emerald-600" />
                          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                {section.id === 3 && (
                  <div className="grid sm:grid-cols-3 gap-6">
                    {privacyControl.map((item) => (
                      <div key={item.title} className="p-6 rounded-[2rem] border border-violet-100/60 bg-violet-50/10 space-y-2 hover:bg-violet-50/30 transition-colors">
                        <h4 className="text-lg font-black text-violet-600 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 font-bold leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </PrivacySection>
            ))}

            {/* CTA */}

            <div className="relative group overflow-hidden bg-foreground text-white rounded-[3rem] p-10 sm:p-16 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="relative flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                <div className="flex-1 space-y-6">
                  <h3 className="text-4xl font-black tracking-tight leading-tight">
                    Need a Deep Dive?
                  </h3>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-xl">
                    Our specialized privacy officers are ready to assist with
                    any complex data inquiries or compliance questions you may
                    have.
                  </p>
                </div>
                <div className="shrink-0 space-y-4">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                    <Mail />
                    Contact Team
                  </button>
                  <p className="text-[10px] text-gray-500 text-center font-bold tracking-[0.2em] uppercase">
                    Response time: ~24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
