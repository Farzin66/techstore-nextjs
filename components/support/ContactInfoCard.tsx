import { SupportContactInfo } from "@/types/support-contact-info"

interface ContactInfoCardProps {
    contact: SupportContactInfo;
}

const ContactInfoCard = ({contact}: ContactInfoCardProps) => {
    const Icon = contact.icon;
  return (
    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/30 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${contact.iconBg} ${contact.iconColor}`}>
            <Icon className="w-[28px] h-[28px]"/>
        </div>
        <h3 className="text-xl font-black text-foreground tracking-tight mb-2 text-balance">{contact.title}</h3>
        <p className="text-gray-400 text-sm font-medium mb-4">{contact.description}</p>
        <p className="text-primary text-xl font-black">{contact.value}</p>
    </div>
  )
}

export default ContactInfoCard