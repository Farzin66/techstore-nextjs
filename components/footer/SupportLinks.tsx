import { supportLinks } from "@/data/support-links";
import  Link  from "next/link";

const SupportLinks = () => {
  return (
    <div>
        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-8">Catalog</h3>
        <ul className='space-y-4 text-sm font-medium'>
          {
            supportLinks.map(({id, label, href})=>(
              <li key={id}>
                <Link href={href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-primary group-hover:w-3 transition-all"></span>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default SupportLinks