
export type TermsTheme = "blue" | "amber" | "rose";
export type TermsIcon = "Gavel" | "Scale" | "CircleAlert";

export interface TermsSection {
        id: number;
        sectionId: string;
        navTitle: string;
        subtitle: string;
        icon: TermsIcon;
        theme: TermsTheme;
}

export interface TermsUserProtocol{
    id: number;
    title: string;
    description: string;
}

export interface TermsSiteGuardrail{
    id: number;
    text: string;
}