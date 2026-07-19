import { footerInfo } from "@/data/footer-info";

const FooterInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/5 text-xs font-black uppercase tracking-widest text-gray-500">
      {footerInfo.map(({ id, icon: Icon, content }) => (
        <div
          key={id}
          className={`flex items-center gap-3
                    ${id === 2 ? "md:justify-center" : ""}
                    ${id === 3 ? "md:justify-end" : ""}`}
        >
          <Icon className="text-primary" />
          <span>{content}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;
