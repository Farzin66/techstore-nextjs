
export type CookiesTheme = "blue" | "indigo" | "amber" ;
export type CookiesIcon = "Info" | "Settings" | "Cookie" ;
export type DeploymentStrategyTheme = "blue" | "emerald" | "purple";
export type DeploymentStrategyIcon = "Settings" | "ShieldCheck" | "Heart";


export interface CookiesSection{ 
        id: number;
        sectionId: string;
        navTitle: string;
        title: string;
        subtitle: string;
        icon: CookiesIcon;
        theme: CookiesTheme;
}


export interface CookiesDeploymentStrategy{
    id: number;
    title: string;
    description: string;
    icon: DeploymentStrategyIcon;
    theme: DeploymentStrategyTheme;

}