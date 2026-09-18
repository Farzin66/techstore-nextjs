"use client";

import { useState } from "react";
import AddCategoryForm from "@/components/dashboard/categories/AddCategoryForm";
import CategoriesBanner from "@/components/dashboard/categories/CategoriesBanner";
import SystemCategoriesSection from "@/components/dashboard/categories/SystemCategoriesSection";

const DashboardCategoriesPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCategoryCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="mb-10 space-y-6">
      <CategoriesBanner />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[400px,1fr]">
        <AddCategoryForm onCategoryCreated={handleCategoryCreated} />

        <SystemCategoriesSection refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default DashboardCategoriesPage;

