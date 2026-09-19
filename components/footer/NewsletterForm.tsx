const NewsletterForm = () => {
  return (
    <div className="space-y-8">
      <h3 className="mb-8 text-sm font-black uppercase tracking-widest text-white">
        Stay Ahead
      </h3>

      <p className="text-xs leading-relaxed">
        Subscribe to receive early-bird tech deals and innovation updates.
      </p>

      <div className="relative group">
        <input
          type="email"
          placeholder="tech@example.com"
          className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        <button
          type="button"
          className="absolute right-2 top-2 bottom-2 rounded-xl bg-primary px-4 text-[10px] font-black uppercase tracking-widest text-[#0F172A] transition-all hover:scale-105 active:scale-95"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default NewsletterForm;
