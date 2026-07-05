import Image from "next/image"

const SpotlightSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className= "relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-[60px]"/>
            <Image
                src="/spot-light.png"
                alt="Spotlight Product"
                width={1000}
                height={700}
                className="relative z-10 w-full h-auto aspect-[4/3] object-cover rounded-[40px] shadow-2xl border border-white/20"/>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse">
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Editor's Weekly Pick</span>
                </div>
                <h4 className="text-xl font-black text-gray-900 tracking-tighter">MacBook Pro M3</h4>
                <span className="text-primary font-black">৳1,499.00</span>
            </div>
        </div>
        <div className="space-y-10">
            <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 block">Spotlight On Quality</span>
                <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-none mb-6">A Masterpiece<br /> For Your <span className="text-primary">Masterpiece.</span></h2>
                <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-lg">The MacBook Pro M3 isn't just a laptop—it's your new creative partner. It is built to handle your heaviest projects while staying impossibly cool and quiet.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div><span className="block text-3xl font-black text-gray-900 tracking-tighter">22hrs</span><span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Battery Life</span></div>
                <div><span className="block text-3xl font-black text-gray-900 tracking-tighter">XDR</span><span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Retina Display</span></div>
            </div>  
            <button type="button" className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-gray-200 active:scale-95">View Details</button>
        </div>
    </div>
  )
}

export default SpotlightSection