import { Camera, Smartphone, Pencil, Trash2, LayoutGrid } from 'lucide-react';

const SystemCategoriesSection = () => {
  const categories = [
    { name: 'camera', sub: 'CAMERA', icon: Camera },
    { name: 'mobile', sub: 'MOBILE', icon: Smartphone }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-1">
        <div className='p-3 bg-primary/10 rounded-xl'>
            <LayoutGrid className="text-primary" size={20} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">System Categories</h2>
      </div>
      <p className="text-sm text-gray-400 mb-6">2 TOTAL ENTRIES</p>
      
      <div className="space-y-4">
        {categories.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 capitalize">{item.name}</p>
                <p className="text-xs text-primary font-medium">{item.sub}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-gray-600 transition-colors">
                <Pencil size={18} />
              </button>
              <button className="hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemCategoriesSection;
