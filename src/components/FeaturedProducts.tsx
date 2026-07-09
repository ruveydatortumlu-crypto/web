import Link from "next/link";
import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Öne Çıkan Ürünler</h2>
        <Link href="#" className="text-sm font-medium text-green-800 hover:text-green-900">
          Tümünü Gör →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
