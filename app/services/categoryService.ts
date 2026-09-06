export interface CategoryResponse {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  parent: string | null;
  productCount: number;
}

export async function getCategories(): Promise<CategoryResponse[]> {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Error fetching categories: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}