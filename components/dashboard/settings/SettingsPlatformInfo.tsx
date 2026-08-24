
const SettingsPlatformInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className= "shadow-sm rounded-3xl bg-white p-10 gap-2 border border-gray-100 flex flex-col">
            <label className="text-gray-400">PLATFORM NAME</label>
            <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm" type="text" placeholder="Tech Store"/>
            <label className="text-gray-400">LOGO URL</label>
            <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm" type="text" placeholder="https://example.com" />
        </div>
        <div className= "shadow-sm rounded-3xl bg-white p-10 gap-2 border border-gray-100 flex flex-col">
            <label className="text-gray-400">SUPPORT EMAIL</label>
            <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm" type="text" placeholder="support@techstore.com"/>
            <label className="text-gray-400">FOOTER TEXT</label>
            <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm" type="text" placeholder="@2026 TechStore. ALL rights reserved." />
        </div>
    </div>
  )
}

export default SettingsPlatformInfo