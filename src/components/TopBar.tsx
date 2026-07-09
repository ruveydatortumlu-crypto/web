import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-green-900 text-green-50 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        <p className="hidden sm:block">Hoş geldiniz! Kıratlılar Gıda&apos;ya gelin.</p>
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <a href="tel:+902121234567" className="flex items-center gap-1.5 hover:text-white">
            <Phone size={14} />
            (0212) 123 45 67
          </a>
          <span className="text-green-700">|</span>
          <a href="#" className="hover:text-white">
            Giriş Yap
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white">
            Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
}
