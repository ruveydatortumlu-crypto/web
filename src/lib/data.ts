import { Category, Product } from "./types";

// Örnek veri: ileride Capital ERP senkronizasyonundan beslenecek.
// Bu dosyadaki fonksiyonların imzaları sabit kalacak, sadece içerik kaynağı değişecek.

export const categories: Category[] = [
  { id: "sut-urunleri", name: "Süt Ürünleri", icon: "🥛" },
  { id: "tereyagi", name: "Tereyağı", icon: "🧈" },
  { id: "peynir", name: "Peynir", icon: "🧀" },
  { id: "yogurt", name: "Yoğurt", icon: "🥣" },
  { id: "bal-recel", name: "Bal & Reçel", icon: "🍯" },
  { id: "zeytinyagi", name: "Zeytinyağı", icon: "🫒" },
];

export const products: Product[] = [
  {
    id: "1",
    sku: "SUT-TY-500",
    name: "Köy Tereyağı",
    unit: "500g — Doğal Sütten",
    price: 185,
    currency: "TRY",
    categoryId: "tereyagi",
    badge: "Çok Satan",
  },
  {
    id: "2",
    sku: "PEY-TL-250",
    name: "Tulum Peyniri",
    unit: "250g — Olgunlaşmış",
    price: 120,
    currency: "TRY",
    categoryId: "peynir",
  },
  {
    id: "3",
    sku: "BAL-CK-750",
    name: "Çiçek Balı",
    unit: "750g — Ham Bal",
    price: 220,
    currency: "TRY",
    categoryId: "bal-recel",
    badge: "Yeni",
  },
  {
    id: "4",
    sku: "YOG-TY-1000",
    name: "Yoğurt",
    unit: "1kg — Tam Yağlı",
    price: 65,
    currency: "TRY",
    categoryId: "yogurt",
  },
  {
    id: "5",
    sku: "PEY-KS-400",
    name: "Kaşar Peyniri",
    unit: "400g — Eski Kaşar",
    price: 145,
    currency: "TRY",
    categoryId: "peynir",
    badge: "Çok Satan",
  },
  {
    id: "6",
    sku: "ZYT-SZ-1000",
    name: "Sızma Zeytinyağı",
    unit: "1lt — Soğuk Sıkım",
    price: 280,
    currency: "TRY",
    categoryId: "zeytinyagi",
  },
];

export function getCategories(): Category[] {
  return categories;
}

export function getFeaturedProducts(): Product[] {
  return products;
}
