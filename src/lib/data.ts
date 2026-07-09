import { Brand, Category, Product } from "./types";

// Örnek veri: ileride Capital ERP senkronizasyonundan beslenecek.
// Bu dosyadaki fonksiyonların imzaları sabit kalacak, sadece içerik kaynağı değişecek.

export const categories: Category[] = [
  { id: "donuk", name: "-18°C Donuk Ürünler", icon: "🧊" },
  { id: "soguk", name: "+4°C Soğuk Ürünler", icon: "❄️" },
  { id: "disari", name: "Dışarı Satış Ürünleri", icon: "📦" },
];

export const brands: Brand[] = [
  { id: "pek-food", name: "PEK Food", categoryId: "donuk" },
  { id: "lapestos", name: "Lapestos", categoryId: "donuk" },
  { id: "dr-oetker", name: "Dr. Oetker", categoryId: "donuk" },
  { id: "keskinoglu-donuk", name: "Keskinoğlu", categoryId: "donuk" },
  { id: "doga-tohumculuk", name: "Doğa Tohumculuk", categoryId: "donuk" },
  { id: "milano-cakes", name: "Milano Cakes", categoryId: "donuk" },

  { id: "keskinoglu-soguk", name: "Keskinoğlu", categoryId: "soguk" },
  { id: "cobanoglu", name: "Çobanoğlu Süt Ürünleri", categoryId: "soguk" },
  { id: "kobak", name: "Kobak Süt Ürünleri", categoryId: "soguk" },
  { id: "tahsildaroglu", name: "Tahsildaroğlu", categoryId: "soguk" },
  { id: "ozpey", name: "Özpey Peynir", categoryId: "soguk" },
  { id: "sutbeyi", name: "Sütbeyi", categoryId: "soguk" },
  { id: "umutay", name: "Umutay", categoryId: "soguk" },
  { id: "et-enfes", name: "Et Enfes", categoryId: "soguk" },
  { id: "ahmet-ipek", name: "Ahmet İpek", categoryId: "soguk" },
  { id: "kinali", name: "Kınalı Süt Ürünleri", categoryId: "soguk" },

  { id: "canpetek", name: "Canpetek Bal", categoryId: "disari" },
  { id: "melis", name: "Melis Turşu", categoryId: "disari" },
  { id: "burcu", name: "Burcu", categoryId: "disari" },
  { id: "sener-helva", name: "Şener Helva", categoryId: "disari" },
  { id: "ucel-helva", name: "Üçel Helva", categoryId: "disari" },
  { id: "esref-zeytin", name: "Eşref Zeytin", categoryId: "disari" },
  { id: "kral-yufka", name: "Kral Yufka", categoryId: "disari" },
];

export const products: Product[] = [
  {
    id: "1",
    sku: "SUT-TY-500",
    name: "Köy Tereyağı",
    unit: "500g — Doğal Sütten",
    price: 185,
    currency: "TRY",
    categoryId: "soguk",
    badge: "Çok Satan",
  },
  {
    id: "2",
    sku: "PEY-TL-250",
    name: "Tulum Peyniri",
    unit: "250g — Olgunlaşmış",
    price: 120,
    currency: "TRY",
    categoryId: "soguk",
  },
  {
    id: "3",
    sku: "BAL-CK-750",
    name: "Çiçek Balı",
    unit: "750g — Ham Bal",
    price: 220,
    currency: "TRY",
    categoryId: "disari",
    badge: "Yeni",
  },
  {
    id: "4",
    sku: "YOG-TY-1000",
    name: "Yoğurt",
    unit: "1kg — Tam Yağlı",
    price: 65,
    currency: "TRY",
    categoryId: "soguk",
  },
  {
    id: "5",
    sku: "PEY-KS-400",
    name: "Kaşar Peyniri",
    unit: "400g — Eski Kaşar",
    price: 145,
    currency: "TRY",
    categoryId: "soguk",
    badge: "Çok Satan",
  },
  {
    id: "6",
    sku: "ZYT-SZ-1000",
    name: "Sızma Zeytinyağı",
    unit: "1lt — Soğuk Sıkım",
    price: 280,
    currency: "TRY",
    categoryId: "disari",
  },
];

export function getCategories(): Category[] {
  return categories;
}

export function getBrands(): Brand[] {
  return brands;
}

export function getBrandsByCategory(categoryId: string): Brand[] {
  return brands.filter((brand) => brand.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products;
}
