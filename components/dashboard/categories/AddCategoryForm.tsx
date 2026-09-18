"use client";

import {
  ArrowRight,
  Battery,
  Cable,
  Camera,
  Cpu,
  Gamepad2,
  HardDrive,
  Headphones,
  Keyboard,
  Laptop,
  LayoutGrid,
  Mouse,
  Smartphone,
  Speaker,
  Tablet,
  Tv,
  Watch,
  Wifi,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Category {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  parent: string | null;
  productCount: number;
}

interface AddCategoryFormProps {
  onCategoryCreated: () => void;
}

const AddCategoryForm = ({
  onCategoryCreated,
}: AddCategoryFormProps) => {
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("LayoutGrid");
  const [parents, setParents] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const icons = [
    { name: "LayoutGrid", component: LayoutGrid },
    { name: "Smartphone", component: Smartphone },
    { name: "Tablet", component: Tablet },
    { name: "Laptop", component: Laptop },
    { name: "Cpu", component: Cpu },
    { name: "Mouse", component: Mouse },
    { name: "Keyboard", component: Keyboard },
    { name: "HardDrive", component: HardDrive },
    { name: "Tv", component: Tv },
    { name: "Gamepad2", component: Gamepad2 },
    { name: "Watch", component: Watch },
    { name: "Headphones", component: Headphones },
    { name: "Speaker", component: Speaker },
    { name: "Camera", component: Camera },
    { name: "Wifi", component: Wifi },
    { name: "Battery", component: Battery },
    { name: "Cable", component: Cable },
    { name: "Zap", component: Zap },
  ];

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await fetch("/api/categories?parentsOnly=true");

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        setParents(data);
      } catch (error) {
        console.error("Fetch parent categories error:", error);
      }
    };

    fetchParents();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          icon: selectedIcon,
          parent: parent || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create category");
      }

      alert("Category published successfully!");

      setName("");
      setParent("");
      setSelectedIcon("LayoutGrid");

      onCategoryCreated();
    } catch (error) {
      console.error("Create category error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to publish category.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-800">
        <span className="text-primary">+</span> Add New Category
      </h2>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-500">
            CATEGORY NAME
          </label>

          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-500">
            PARENT
          </label>

          <select
            value={parent}
            onChange={(event) => setParent(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
          >
            <option value="">None (Top Level Category)</option>

            {parents.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm text-gray-500">
              VISUAL ICON
            </label>

            <span className="cursor-pointer text-xs text-primary">
              Upload File
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {icons.map(({ name: iconName, component: Icon }) => (
              <button
                key={iconName}
                type="button"
                onClick={() => setSelectedIcon(iconName)}
                className={`flex items-center justify-center rounded-xl p-3 transition-colors ${
                  selectedIcon === iconName
                    ? "bg-primary text-white"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <ArrowRight />
          {isLoading ? "PUBLISHING..." : "PUBLISH CATEGORY"}
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;

