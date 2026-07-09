import { getCategories } from "@/lib/data";

export default function CategoryGrid() {
  const categories = getCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 py-6 text-center hover:border-green-700 hover:shadow-sm transition"
          >
            <span className="text-3xl">{category.icon}</span>
            <span className="text-sm font-medium text-neutral-700">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
