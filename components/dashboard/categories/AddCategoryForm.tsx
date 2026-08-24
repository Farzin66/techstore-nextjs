import { 
  LayoutGrid, Smartphone, Tablet, Laptop, Cpu, Mouse, Keyboard, HardDrive, 
  Tv, Gamepad2, Watch, Headphones, Speaker, Camera, Wifi, Battery, Cable, Zap, 
  ArrowRight
} from 'lucide-react';

const AddCategoryForm = () => {
  const icons = [
    LayoutGrid, Smartphone, Tablet, Laptop, Cpu, Mouse, Keyboard, HardDrive, 
    Tv, Gamepad2, Watch, Headphones, Speaker, Camera, Wifi, Battery, Cable, Zap
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6"><span className='text-primary'>+</span> Add New Category</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1">CATEGORY NAME</label>
          <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10" />
        </div>
        
        <div>
          <label className="block text-sm text-gray-500 mb-1">PARENT</label>
          <button className="w-full p-3 text-left rounded-xl bg-gray-50 border border-gray-200">None (Top Level Category)</button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-gray-500">VISUAL ICON</label>
            <span className="text-xs text-primary cursor-pointer">Upload File</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {icons.map((Icon, index) => (
              <button 
                key={index} 
                className={`p-3 rounded-xl flex items-center justify-center transition-colors ${index === 0 ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95">
          <ArrowRight/>
          PUBLISH CATEGORY
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;
