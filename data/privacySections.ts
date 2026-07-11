

import { PrivacySectionsData } from "@/types/PrivacySection";


export const privacySections: PrivacySectionsData = [
  {
    id: 1,
    sectionId: "collection",
    title: "Data Intelligence",
    subtitle: "What We Collect",
    navTitle: "Data Collection",
    description:
      "Information gathering is restricted to the absolute essentials required for service delivery and ecosystem optimization.",
    icon: "Eye",
    theme: "blue",
  },

  {
    id: 2,
    sectionId: "usage",
    title: "Purposeful Usage",
    subtitle: "How We Use It",
    navTitle: "How We Use It",
    description:
      "Utilization is strictly functional. We leverage your data to process secure transactions, automate logistics tracking, and improve your experience.",
    icon: "Lock",
    theme: "emerald",
  },

  {
    id: 3,
    sectionId: "control",
    title: "Absolute Authority",
    subtitle: "Your Data, Your Rules",
    navTitle: "Your Control",
    description:
      "Full sovereignty over your digital footprint is not a feature — it's a requirement. You retain full control over your information.",
    icon: "Shield",
    theme: "violet",
  },
];