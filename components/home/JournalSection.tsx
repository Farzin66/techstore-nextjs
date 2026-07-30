import { Zap } from "lucide-react"
import { journalPosts } from "@/data/journal-posts"
import JournalCard from "./JournalCard"

const JournalSection = () => {
  return (
    <section className="mb-10 sm:mb-16">
        <div className="flex items-end justify-between mb-6">
            <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 block">The Journal</span>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">News You Can 
                    <span className="text-primary">Actually Use.</span>
                </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Read All Stories 
                <Zap className="w-3.5 h-3.5"/>
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                journalPosts.map(
                    (post) =>(
                        <JournalCard key={post.id} {...post}/>
                    )
                )
            }
        </div>
    </section>
  )
}

export default JournalSection