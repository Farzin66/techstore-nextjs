import { brands } from "@/data/brand";

const BrandSection = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-6 lg:py-10 overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap border-r border-gray-100  pr-12 hidden lg:block">
            Global Fleet
          </span>
          <div className="flex-1 flex items-center justify-between opacity-30 grayscale">
            {brands.map(({ name, icon: Icon }) => {
              return (
                <div
                  key={name}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                    <Icon
                      className="w-6 h-6
                       hover:rotate-12
                       hover:scale-110
                       transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-black tracking-tighter text-gray-900 uppercase">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
