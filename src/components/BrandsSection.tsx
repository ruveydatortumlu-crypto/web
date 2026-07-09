import { Tag } from "lucide-react";
import { getBrandsByCategory, getCategories } from "@/lib/data";

export default function BrandsSection() {
  const categories = getCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-widest text-green-800 uppercase">
          Bayiliklerimiz
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-900">
          Güvenle Dağıttığımız Markalar
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {categories.map((category) => {
          const brands = getBrandsByCategory(category.id);
          return (
            <div
              key={category.id}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{category.icon}</span>
                <h3 className="font-bold text-neutral-900">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700"
                  >
                    <Tag size={14} className="text-green-800" />
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
