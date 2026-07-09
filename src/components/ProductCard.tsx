import { Lock, Package } from "lucide-react";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition">
      <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white ${
              product.badge === "Yeni" ? "bg-sky-600" : "bg-green-800"
            }`}
          >
            {product.badge}
          </span>
        )}
        <Package className="text-amber-600/50" size={48} />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-semibold text-neutral-900">{product.name}</h3>
        <p className="text-sm text-neutral-500">{product.unit}</p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
          <Lock size={14} />
          Fiyat için bayi girişi yapın
        </p>
        <a
          href="#"
          className="mt-3 block w-full rounded-lg bg-green-800 py-2 text-center text-sm font-semibold text-white hover:bg-green-900"
        >
          Bayi Girişi
        </a>
      </div>
    </div>
  );
}
