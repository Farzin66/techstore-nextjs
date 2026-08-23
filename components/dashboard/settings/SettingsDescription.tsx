import { BookOpenText } from "lucide-react"

const SettingsDescription = () => {
  return (
    <div className="relative mb-6 items-center justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
      <div className="flex items-center gap-2 mb-10 text-primary">
        <div>
          <BookOpenText/>
        </div>
        <h2 className="font-extrabold">
          Platform Description
        </h2>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-400">SEO DESCRIPTION</label>
        <textarea rows={6} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm placeholder-black" placeholder="Modern E-commerce Platform"></textarea>
      </div>
    </div>
  )
}

export default SettingsDescription