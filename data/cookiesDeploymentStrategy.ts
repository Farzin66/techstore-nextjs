import type { CookiesDeploymentStrategy } from "@/types/CookiesSection";

export const cookiesDeploymentStrategy: CookiesDeploymentStrategy[]  = [
    {
        id: 1,
        title: "Essential Core",
        description: "Critical for authentication and cart maintenance. Without these, the platform's core logic cannot function.",
        icon: "ShieldCheck",
        theme: "emerald"
    },
    {
        id: 2,
        title: "Performance Metrics",
        description: "Anonymous data points that help us optimize load times and navigating flows within the Silicon Ecosystem.",
        icon: "Settings",
        theme: "blue"
    },
    {
        id: 3,
        title: "Personalization",
        description: "Remembering your currency, theme preferences, and localized settings for a custom-tailored experience.",
        icon: "Heart",
        theme: "purple"
    },
]