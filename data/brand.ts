import {
  Smartphone,
  Headphones,
  Cpu,
  Monitor,
  Laptop,
} from "lucide-react";
import { Brand } from "@/types/brand";

export const brands: Brand[] = [
  {
    name: "Apple",
    icon: Smartphone,
  },
  {
    name: "Samsung",
    icon: Smartphone,
  },
  {
    name: "Sony",
    icon: Headphones,
  },
  {
    name: "NVIDIA",
    icon: Cpu,
  },
  {
    name: "LG",
    icon: Monitor,
  },
  {
    name: "Dell",
    icon: Laptop,
  },
];