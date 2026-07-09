import { ArrowRight, ChevronDown, ChevronRight, CircleCheck, Eye, Lock, Mail, Shield } from "lucide-react"
import Link from "next/link"

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
                        <Shield className="w-[14px] h-[14px] animate-pulse"/>
                        <span>Identity Protection Protocol</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                        Privacy{" "}
                        <span className="text-primary italic">Matters.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">Our commitment to your data security is absolute. We handle your information with the same integrity we bring to our hardware.</p>
                    <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
                        <span className="flex items-center gap-1.5">
                            <CircleCheck className="w-[12px] h-[12px] text-primary"/>
                            GDPR Compliant
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Updated April 5, 2026</span></div>
                    </div>
                </div>
            </div>
            <div className="container-custom py-20 lg:py-32">
                <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-start">
                    <aside className="sticky top-32 hidden lg:block space-y-8">
                        <nav className="space-y-2">
                            <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group hover:bg-gray-50 text-gray-500">
                                <span className="text-sm font-bold tracking-tight">Data Collection</span>
                                <ChevronRight className="w-[12px] h-[12px] transition-transform duration-300 rotate-90"/>
                            </button>
                            <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group bg-primary text-white shadow-lg shadow-primary/25 translate-x-2">
                                <span className="text-sm font-bold tracking-tight">How We Use It</span>
                                <ChevronRight className="w-[12px] h-[12px] transition-transform duration-300 group-hover:translate-x-1"/>
                            </button>
                            <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group hover:bg-gray-50 text-gray-500">
                                <span className="text-sm font-bold tracking-tight">Your Control</span>
                                <ChevronRight className="w-[12px] h-[12px] transition-transform duration-300 group-hover:translate-x-1"/>
                            </button>
                        </nav>
                        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Need Clarity?</p>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">Our legal team is available for any specific data inquiries you may have.</p>
                            <Link href="mailto:privacy@techstore.com" className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all">
                                Email Support
                                <ArrowRight className="w-[14px] h-[14px]"/>
                            </Link>
                        </div>
                    </aside>
                    <div className="space-y-24">
                        <section id="collection" className="scroll-mt-32 group">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-[1.5rem] bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
                                    <Eye/>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-foreground tracking-tight">Data Intelligence</h2>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">What We Collect</p>
                                </div>
                            </div>
                            <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                                <div className="grid sm:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium">Information gathering is restricted to the absolute essentials required for service delivery and ecosystem optimization.</p>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                                <div>
                                                    <span className="block text-sm font-black text-foreground uppercase tracking-tight">Core Identity</span>
                                                    <span className="text-sm text-gray-500 font-medium">Legal name and contact matrix.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                                <div>
                                                    <span className="block text-sm font-black text-foreground uppercase tracking-tight">Logistics Data</span>
                                                    <span className="text-sm text-gray-500 font-medium">Precision shipping coordinates.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                                <div>
                                                    <span className="block text-sm font-black text-foreground uppercase tracking-tight">Secure Credentials</span>
                                                    <span className="text-sm text-gray-500 font-medium">Vaulted authentication data.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50 flex flex-col justify-center text-center space-y-4">
                                        <div className="text-4xl font-black text-blue-600">Zero</div>
                                        <p className="text-sm text-blue-600/70 font-bold uppercase tracking-widest leading-tight">Third Party<br/>Data Sales</p>
                                        <div className="pt-4 text-[10px] text-blue-400 font-medium">Your data stays within the Tech-Store ecosystem. Always.</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="usage" className="scroll-mt-32 group">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-[1.5rem] bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg]">
                                    <Lock/>    
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-foreground tracking-tight">Purposeful Usage</h2>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">How We Use It</p>
                                </div>
                            </div>
                            <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 border-emerald-100/40">
                                <div className="space-y-8">
                                    <p className="text-xl text-gray-600 leading-relaxed font-medium">Utilization is strictly functional. We leverage your data to process high-security transactions via Stripe, automate your logistics tracking, and—only with explicit consent—curate product release notifications.</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50">
                                            <Shield className="text-emerald-600"/>
                                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Encrypted</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50">
                                            <Lock className="text-emerald-600"/>
                                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Authorized</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50">
                                            <Eye className="text-emerald-600"/>
                                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Optimized</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50">
                                            <CircleCheck className="text-emerald-600"/>
                                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="control" className="scroll-mt-32 group">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-[1.5rem] bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm transition-transform duration-500 group-hover:scale-110">
                                    <Shield/>   
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-foreground tracking-tight">Absolute Authority</h2>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Your Data, Your Rules</p>
                                </div>
                            </div>
                            <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-500 border-violet-100/40">
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">Full sovereignty over your digital footprint is not a feature—it's a requirement. You retain the right to audit, extract, or dissolve your data at any moment.</p>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="p-6 rounded-[2rem] border border-violet-100/60 bg-violet-50/10 space-y-2 hover:bg-violet-50/30 transition-colors">
                                        <h4 className="text-lg font-black text-violet-600 tracking-tight">Edit</h4>
                                        <p className="text-xs text-gray-500 font-bold leading-relaxed">Instant Profile Correction</p>
                                    </div>
                                    <div className="p-6 rounded-[2rem] border border-violet-100/60 bg-violet-50/10 space-y-2 hover:bg-violet-50/30 transition-colors">
                                        <h4 className="text-lg font-black text-violet-600 tracking-tight">Export</h4>
                                        <p className="text-xs text-gray-500 font-bold leading-relaxed">Full Data Portability</p>
                                    </div>
                                    <div className="p-6 rounded-[2rem] border border-violet-100/60 bg-violet-50/10 space-y-2 hover:bg-violet-50/30 transition-colors">
                                        <h4 className="text-lg font-black text-violet-600 tracking-tight">Erase</h4>
                                        <p className="text-xs text-gray-500 font-bold leading-relaxed">Permanent Deletion Rights</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="relative group overflow-hidden bg-foreground text-white rounded-[3rem] p-10 sm:p-16 shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-125"></div>
                            <div className="relative flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-4xl font-black tracking-tight leading-tight">Need a Deep Dive?</h3>
                                    <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-xl">Our specialized privacy officers are ready to assist with any complex data inquiries or compliance questions you may have.</p>
                                </div>
                                <div className="shrink-0 space-y-4">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                        <Mail/>
                                        Contact Team
                                    </button>
                                    <p className="text-[10px] text-gray-500 text-center font-bold tracking-[0.2em] uppercase">Response time: ~24 Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>  
  )
}

export default page