import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { getCategories } from "@/lib/data";

export default function SiteHeader() {
  const categories = getCategories();

  return (
    <div className="border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-800 text-lg font-bold text-white">
            K
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-neutral-900">Kıratlılar</span>
            <span className="block text-xs text-neutral-500">Gıda Ürünleri</span>
          </span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl items-stretch overflow-hidden rounded-lg border border-neutral-200">
          <label className="sr-only" htmlFor="category-select">
            Kategori seç
          </label>
          <select
            id="category-select"
            className="border-r border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-600 focus:outline-none"
          >
            <option>Kategori seç</option>
            {categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
          <input
            type="search"
            placeholder="Ürün ara..."
            className="flex-1 px-3 text-sm focus:outline-none"
          />
          <button
            type="button"
            aria-label="Ara"
            className="flex items-center justify-center bg-green-800 px-4 text-white hover:bg-green-900"
          >
            <Search size={18} />
          </button>
        </div>

        <div className="flex items-center gap-6 shrink-0 text-neutral-700">
          <a href="#" className="hidden sm:flex flex-col items-center gap-0.5 hover:text-green-800">
            <User size={20} />
            <span className="text-xs">Hesabım</span>
          </a>
          <a href="#" className="relative flex flex-col items-center gap-0.5 hover:text-green-800">
            <Heart size={20} />
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-800 text-[10px] text-white">
              0
            </span>
            <span className="text-xs">Favoriler</span>
          </a>
          <a href="#" className="relative flex flex-col items-center gap-0.5 hover:text-green-800">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-800 text-[10px] text-white">
              0
            </span>
            <span className="text-xs">Sepet</span>
          </a>
        </div>
      </div>
    </div>
  );
}
