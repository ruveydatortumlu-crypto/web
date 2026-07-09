import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { getCategories } from "@/lib/data";

export default function SiteFooter() {
  const categories = getCategories();

  return (
    <footer className="bg-green-950 text-green-100/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-800 text-sm font-bold text-white">
              K
            </span>
            <span className="text-lg font-bold text-white">Kıratlılar Gıda</span>
          </span>
          <p className="mt-4 text-sm">
            1985&apos;ten bu yana doğal ve güvenilir gıda üretimi, Türkiye geneline
            toptan dağıtım.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Kurumsal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Anasayfa</Link></li>
            <li><Link href="#" className="hover:text-white">Hakkımızda</Link></li>
            <li><Link href="#" className="hover:text-white">Bizden Haberler</Link></li>
            <li><Link href="#" className="hover:text-white">S.S.S</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Kategoriler
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href="#" className="hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Organize Sanayi Bölgesi, Türkiye
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              (0212) 123 45 67
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              info@kiratlilargida.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-green-100/60 text-center">
          © {new Date().getFullYear()} Kıratlılar Gıda. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
