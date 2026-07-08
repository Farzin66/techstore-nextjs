import { faqs } from "@/data/faqs";
import { Zap } from "lucide-react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-2xl font-black text-foreground mb-8 flex items-center gap-3 tracking-tight">
              <Zap className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.id} faq={faq} isOpen={index === 0} />
              ))}
            </div>
          </div>
  );
};

export default FAQSection;
