import { PrivacySecurityData } from "@/types/privacy-section";
import { Shield, Lock, Eye, CircleCheck } from "lucide-react";

export const privacySecurity: PrivacySecurityData = [
  {
    title: "Encrypted",
    icon: Shield,
  },
  {
    title: "Authorized",
    icon: Lock,
  },
  {
    title: "Optimized",
    icon: Eye,
  },
  {
    title: "Verified",
    icon: CircleCheck,
  },
];