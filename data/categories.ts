import {
  Sparkles,
  Headphones,
  Laptop,
  BoomBox,
  Gamepad2,
  Monitor,
  Network,
  Smartphone,
} from "lucide-react";

import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: 1,
    name: "All Products",
    slug: "all",
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Audio",
    slug: "audio",
    icon: Headphones,
  },
  {
    id: 3,
    name: "Computer Accessories",
    slug: "computer-accessories",
    icon: Laptop,
  },
  {
    id: 4,
    name: "Computer Hardware",
    slug: "computer-hardware",
    icon: Laptop,
  },
  {
    id: 5,
    name: "Desktop",
    slug: "desktop",
    icon: Laptop,
  },
  {
    id: 6,
    name: "Gadget",
    slug: "gadget",
    icon: BoomBox,
  },
  {
    id: 7,
    name: "Gaming Console",
    slug: "gaming-console",
    icon: Gamepad2,
  },
  {
    id: 8,
    name: "Laptop",
    slug: "laptop",
    icon: Laptop,
  },
  {
    id: 9,
    name: "Monitor",
    slug: "monitor",
    icon: Monitor,
  },
  {
    id: 10,
    name: "Networking",
    slug: "networking",
    icon: Network,
  },
  {
    id: 11,
    name: "Smartphone",
    slug: "smartphone",
    icon: Smartphone,
  },
];