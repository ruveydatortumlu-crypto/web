import { Factory } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-neutral-200/70">
          <div className="flex flex-col items-center gap-2 text-neutral-400">
            <Factory size={40} />
            <span className="text-sm">Fabrika görseli</span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-green-800 uppercase">
            Biz Kimiz
          </p>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900">
            40 Yılı Aşkın Deneyimle Gıda Sektöründe
          </h2>
          <p className="mt-5 text-neutral-600">
            Kıratlılar Gıda olarak 1985&apos;ten bu yana doğal, sağlıklı ve lezzetli gıda
            ürünleri üretiyoruz. Geleneksel üretim yöntemlerini modern hijyen
            standartlarıyla buluşturarak sofralarınıza güvenilir ürünler sunuyoruz.
          </p>
          <p className="mt-4 text-neutral-600">
            Türkiye&apos;nin 40&apos;tan fazla iline dağıtım yaparak büyümeye devam
            ediyoruz. Her ürünümüzün arkasında yıllarca süren AR-GE çalışması ve kalite
            kontrolü yatmaktadır.
          </p>
          <Link
            href="#"
            className="mt-6 inline-block rounded-lg bg-green-800 px-6 py-3 text-sm font-semibold text-white hover:bg-green-900"
          >
            Devamını Oku
          </Link>
        </div>
      </div>
    </section>
  );
}
