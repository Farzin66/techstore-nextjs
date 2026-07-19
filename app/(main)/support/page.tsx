import ContactForm from "@/components/support/ContactForm";
import ContactInfoCard from "@/components/support/ContactInfoCard";
import FAQSection from "@/components/support/FAQSection";
import LiveChatCard from "@/components/support/LiveChatCard";
import SupportHero from "@/components/support/SupportHero";
import { supportContactInfo } from "@/data/support-contact-info";

const page = () => {
  return (
<main className="min-h-[70vh]">
      <div className="bg-[#F8FAFC] min-h-screen pb-24">
      <SupportHero/>
      <div className="container-custom -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
              <FAQSection/>
              <ContactForm/>
          </div>
          <aside className="space-y-6">
            {
              supportContactInfo.map((item)=>(
                <ContactInfoCard key={item.id} contact={item}/>
              ))
            }
            <LiveChatCard/>
          </aside>
        </div>
      </div>
    </div>
</main>

  )
};

export default page;
