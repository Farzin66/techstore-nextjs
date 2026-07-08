import { Mail, MapPin, Phone } from "lucide-react";

export const supportContactInfo = [
  {
    id: 1,
    title: "Support Hotline",
    description: "Direct line for instant technical assistance.",
    value: "+880 1234-567890",
    icon: Phone,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Email Help Desk",
    description: "Expect a detailed response within 1 business day.",
    value: "support@techstore.com",
    icon: Mail,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 3,
    title: "Global HQ",
    description: "Visit our tech hub in the heart of the city.",
    value: "Dhaka, Bangladesh",
    icon: MapPin,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];