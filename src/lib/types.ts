export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  unit: string;
  price: number;
  currency: "TRY";
  categoryId: string;
  badge?: "Çok Satan" | "Yeni";
}
