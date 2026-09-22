import { ChevronDown } from "lucide-react";
import { FAQ } from "@/types/faq";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
}

const FAQItem = ({ faq, isOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-50 last:border-0 pb-4">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-bold transition-colors text-gray-600 group-hover:text-primary">
          {faq.question}
        </span>
        <ChevronDown
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <p className="text-gray-500 font-medium leading-relaxed pb-4 pr-8">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
