import Link from "next/link";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "#", label: "Hakkımızda" },
  { href: "#", label: "Ürünler" },
  { href: "#", label: "Bizden Haberler" },
  { href: "#", label: "S.S.S" },
  { href: "#", label: "İletişim" },
];

export default function MainNav() {
  return (
    <nav className="bg-green-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-11 items-center gap-8 overflow-x-auto text-sm font-medium text-green-50">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="whitespace-nowrap hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
