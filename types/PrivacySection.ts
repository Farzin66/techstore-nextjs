import { LucideIcon } from "lucide-react";

export type PrivacyTheme = "blue" | "emerald" | "violet";
export type PrivacyIcon = "Eye" | "Lock" | "Shield";

export interface PrivacySection {
  id: number;
  sectionId: string;
  title: string;
  subtitle: string;
  description: string;
  navTitle:string;
  icon: PrivacyIcon;
  theme: PrivacyTheme;
}

export interface PrivacyCollectionItem {
  title: string;
  description: string;
}

export interface PrivacySecurityFeature {
  title: string;
  icon: LucideIcon;
}

export interface PrivacyControlItem {
  title: string;
  description: string;
}

export type PrivacySectionsData = PrivacySection[];

export type PrivacyCollectionData = PrivacyCollectionItem[];

export type PrivacySecurityData = PrivacySecurityFeature[];

export type PrivacyControlData = PrivacyControlItem[];