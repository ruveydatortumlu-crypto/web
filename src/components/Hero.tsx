import Link from "next/link";

const stats = [
  { value: "1985", label: "Kuruluş Yılı" },
  { value: "200+", label: "Ürün Çeşidi" },
  { value: "40+", label: "İl'de Dağıtım" },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-800 to-green-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-green-300 uppercase">
            Doğallık ve Lezzet
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Kıratlılar Gıda ile Sofranızda Güven
          </h1>
          <p className="mt-6 max-w-xl text-green-100/80">
            Yılların birikimi ve titizliğiyle üretilen doğal gıda ürünleri. Çiftçiden
            sofraya, taze ve güvenilir.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-50"
            >
              Ürünleri İncele
            </Link>
            <Link
              href="#"
              className="rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Hakkımızda
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/10 px-3 py-6 text-center backdrop-blur-sm"
            >
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-green-100/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
