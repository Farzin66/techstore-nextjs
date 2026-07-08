
const NewsletterForm = () => {
  return (
    <div className='space-y-8'>
        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-8">Stay Ahead</h3>
        <p className="text-xs leading-relaxed">Subscribe to receive early-bird tech deals and innovation updates.</p>
        <div className="relative group">
            <input type="email" placeholder="tech@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white font-bold"/>
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-[#0F172A] rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Join</button>
        </div>
    </div>
  )
}

export default NewsletterForm