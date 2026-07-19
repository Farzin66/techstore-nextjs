import { FooterInfo } from "@/types/footer-info";
import { Mail, MapPin, Phone } from "lucide-react";

export const footerInfo: FooterInfo[] =[
    {
        id:1,
        icon: MapPin,
        content: "Dhaka, Bangladesh · Global Hub",
    },
    {
        id:2,
        icon: Mail,
        content: "support@techstore.io",
    },
    {
        id:3,
        icon: Phone,
        content: "+880 1234-TECH-00",
    },
]