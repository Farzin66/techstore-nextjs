import TermsSection from "@/components/terms/TermsSection";
import { termsSections } from "@/data/termsSections";
import { termsSiteGuardrails } from "@/data/termsSiteGuardrails";
import { termsUserProtocol } from "@/data/termsUserProtocol";
import { ArrowRight, ChevronRight, FileText, ShieldCheck } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20">
      <div className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-gray-100">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl opacity-50"></div>

        {/* Hero */}
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 text-violet-600 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-violet-100 shadow-sm">
              <FileText className="w-[14px] h-[14px] animate-pulse" />
              <span>Platform Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
              Platform <span className="text-primary italic">Rules.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Clear, transparent, and fair. Our terms are designed to protect
              both the community and the creators behind Tech-Store.
            </p>
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-primary" /> Verified Policy
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Revision: April 5, 2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom py-20 lg:py-32">
        <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-start">
          {/* Sidebar */}
          <aside className="sticky top-32 hidden lg:block space-y-8">
            <nav className="space-y-2">
              {termsSections.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                    item.id === 1
                      ? "bg-primary text-white shadow-lg shadow-primary/25 translate-x-2"
                      : "hover:bg-gray-50 text-gray-500"
                  }`}
                >
                  <span className="text-sm font-bold tracking-tight">
                    {item.title}
                  </span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 rotate-90" />
                </button>
              ))}
            </nav>
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Fair Play
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Compliance forms the bedrock of our high-integrity digital
                ecosystem.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-[14px] h-[14px]" />
              </button>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-24">
            {termsSections.map((section) => (
              <TermsSection key={section.id} section={section}>
                {section.id === 1 && (
                  <div className="space-y-8">
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      When accessing Tech-Store, you enter a commitment of
                      mutual respect and high-performance collaboration.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-10">
                      {termsUserProtocol.map((item) => (
                        <div key={item.id} className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                            <h4 className="text-sm font-black text-foreground uppercase tracking-tight">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed pl-4 border-l border-blue-100">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {section.id === 2 && (
                  <div className="grid sm:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Every order is a secure handshake. Prices are precise,
                        and transactions are vaulted through Stripe for total
                        financial security.
                      </p>
                      <div className="inline-flex flex-col p-6 rounded-3xl bg-amber-50/50 border border-amber-100/50">
                        <span className="text-2xl font-black text-amber-600">
                          Secure Vault
                        </span>
                        <span className="text-xs text-amber-600/70 font-bold uppercase tracking-widest">
                          Zero Card Storage Policy
                        </span>
                      </div>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 space-y-4">
                      <p className="text-sm text-gray-500 leading-relaxed font-medium italic">
                        "If we detect inaccuracies in pricing or stock
                        availability during order ingestion, we reserve the
                        right to nullify the transaction and issue an immediate
                        correction."
                      </p>
                    </div>
                  </div>
                )}
                {section.id === 3 && (
                  <div className="space-y-8">
                    <div className="p-8 bg-rose-50/30 rounded-[2.5rem] border border-rose-100/50 text-gray-600 text-lg leading-relaxed font-medium">
                      The platform is presented "as is." While we strive for
                      absolute uptime and perfection, we cannot be held
                      responsible for indirect or complex damages arising from
                      digital glitches or unforeseen service interruptions.
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                      {termsSiteGuardrails.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                        >
                          <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TermsSection>
            ))}

            {/* CTA */}
            <div className="relative group overflow-hidden bg-foreground text-white rounded-[3rem] p-10 sm:p-16 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent)] pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] transition-transform duration-1000 group-hover:scale-125"></div>
              <div className="relative space-y-12">
                <div className="max-w-2xl space-y-6">
                  <h3 className="text-4xl font-black tracking-tight leading-tight">
                    Acceptance Protocol
                  </h3>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed">
                    By navigating the Tech-Store ecosystem, you formally
                    acknowledge and accept these terms. Our team is committed to
                    evolving these rules as our community expands.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                    Agree &amp; Synchronize
                  </button>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    Last Auth: April 5, 2026
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
