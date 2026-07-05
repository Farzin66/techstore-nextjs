import Image from "next/image";
import { JournalPost } from "@/types/journalPost";
type JournalCardProps = Omit<JournalPost, "id">;

export const JournalCard = ({ title, category, image }: JournalCardProps) => {
  return (
    <>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-3 block">
          {category}
        </span>
        <h4 className="text-xl font-black text-gray-900 tracking-tighter leading-tight group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
    </>
  );
};

export default JournalCard;
