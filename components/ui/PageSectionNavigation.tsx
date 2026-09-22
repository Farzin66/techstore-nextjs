"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationSection {
  id: number;
  sectionId: string;
  navTitle: string;
}

interface PageSectionNavigationProps {
  sections: NavigationSection[];
}

const PageSectionNavigation = ({
  sections,
}: PageSectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.sectionId ?? ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-120px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="space-y-2">
      {sections.map((section) => {
        const isActive = activeSection === section.sectionId;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => handleClick(section.sectionId)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group
              ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25 translate-x-2"
                  : "hover:bg-gray-50 text-gray-500"
              }`}
          >
            <span className="text-sm font-bold tracking-tight">
              {section.navTitle}
            </span>

            {isActive ? (
              <ChevronDown className="w-3 h-3 transition-all duration-300" />
            ) : (
              <ChevronRight className="w-3 h-3 transition-all duration-300" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default PageSectionNavigation;