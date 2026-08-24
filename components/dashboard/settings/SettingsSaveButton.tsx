import { Save } from "lucide-react"


const SettingsSaveButton = () => {
  return (
    
        <button type="submit" className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-3 bg-primary text-white shadow-primary/30 hover:-translate-y-1 active:scale-95">
            <Save className="w-5 h-5"/>
            Save Global Settings
        </button>
    
  )
}

export default SettingsSaveButton