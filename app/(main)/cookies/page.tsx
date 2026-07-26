
import CookiesSection from "@/components/cookies/CookiesSection";
import { cookiesDeploymentStrategy } from "@/data/cookies-deployment-strategy";
import { cookiesSections } from "@/data/cookies-section";
import { ArrowRight, ChevronRight, Cookie, ShieldCheck, Settings, Heart } from "lucide-react"


const iconMap = {
  ShieldCheck,
  Settings,
  Heart,
};

const deploymentThemeStyles = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
};


const page = () => {
    
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20">
        <div className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-gray-100">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl opacity-50"></div>

            {/* Hero */}
            <div className="container-custom relative">
                <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-amber-100 shadow-sm">
                        <Cookie className="w-[14px] h-[14px] animate-bounce"/> 
                        <span>Browser Intelligence</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                        Cookie 
                        <span className="text-primary italic">Policy.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">Cookies help us optimize your "Silicon Ecosystem" experience. We use them with respect and total transparency.</p>
                    <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3 h-3 text-primary"/>
                            Privacy Verified
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
                        {
                            cookiesSections.map((item)=>(
                                <button key={item.id} className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group bg-primary text-white shadow-lg shadow-primary/25 translate-x-2">
                                    <span className="text-sm font-bold tracking-tight">{item.navbarTitle}</span>
                                    <ChevronRight className="w-4 h-4 transition-transform duration-300 rotate-90"/>
                                </button>
                            ))
                        }
                    </nav>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Helpful Info</p>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">Disabling essential cookies may interrupt your core shopping experience.</p>
                        <button className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all">
                            Browser Guide 
                            <ArrowRight className="w-[14px] h-[14px]"/>
                        </button>
                    </div>
                </aside>

                {/* Sections */}
                <div className="space-y-24">
                    <>
                    {
                        cookiesSections.map((section)=>(
                            
                            
                            <CookiesSection key={section.id} section={section}>
                                {
                                    section.id === 1 && (
                                        <p className="text-xl text-gray-600 leading-relaxed font-medium">Cookies are precision text fragments stored by your browser. They are non-executable data entities that allow us to maintain a seamless, personalized state during your interaction with our hardware ecosystem.</p>
                                )}
                                {
                                    section.id === 2 && (
                                        <div className="space-y-6">
                                                {
                                                    cookiesDeploymentStrategy.map((item) => {
                                                        const Icon = iconMap[item.icon];
                                                        const theme = deploymentThemeStyles[item.theme];
                                                        return(
                                                        <div key={item.id} className="flex gap-6 items-start">
                                                            <div className={`w-12 h-12 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center shrink-0 border border-current/10`}>
                                                                <Icon/>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">{item.title}</h4>
                                                                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.description}</p>
                                                            </div>
                                                        </div>)
                                                   })
                                                }
                                        </div>
                                    )
                                }
                                {
                                        section.id === 3 && (
                                            <div className="space-y-10">
                                                <p className="text-lg text-gray-600 leading-relaxed font-medium">You maintain total sovereignty over your browser settings. Through your security preferences, you can audit, block, or dissolve any data fragments we deploy.</p>
                                                <div className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                                                    <div className="flex-1 space-y-4 text-center md:text-left">
                                                        <h4 className="text-xl font-black tracking-tight">Precision Settings</h4>
                                                        <p className="text-sm text-gray-500 font-medium">Configure your ecosystem journey with granular control over optional data collection.</p>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                                        <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">Audit All</button>
                                                        <button className="px-8 py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all">Synchronize Custom</button>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                             </CookiesSection>
  
                        ))
                        
                        
                    }
                    <div className="relative group overflow-hidden bg-foreground text-white rounded-[3rem] p-10 sm:p-16 shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full bg-[conic-gradient(from_225deg_at_50%_50%,rgba(34,197,94,0.1),transparent)] pointer-events-none"></div>
                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] transition-transform duration-1000 group-hover:scale-125"></div>
                        <div className="relative flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h3 className="text-4xl font-black tracking-tight leading-tight">Proceed with Confidence</h3>
                                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-xl">By continuing your discovery of Tech-Store, you acknowledge our specialized use of browser data fragments to enhance your journey.</p>
                            </div>
                            <div className="shrink-0">
                                <button className="px-12 py-6 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/40 hover:brightness-110 transition-all">Confirm &amp; Continue</button>
                            </div>
                        </div>
                    </div>
                    </>
                  
                </div>

            </div>
        </div>   
    </div>
  )
}

export default page