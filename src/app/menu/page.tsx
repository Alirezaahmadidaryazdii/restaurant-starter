
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { foodCategories } from "@/data/categories";
import { menuItems } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary"
        >
          <ArrowLeft size={17} />
          صفحه اصلی
        </Link>

        <div className="mb-10">
          <span className="text-sm font-semibold text-primary">
            همه چی کباب
          </span>

          <h1 className="mt-3 text-3xl font-bold text-foreground">
            منوی غذاها
          </h1>

          <p className="mt-3 text-sm leading-7 text-muted">
            دسته‌بندی مورد نظر خود را انتخاب کنید و غذاها را ببینید.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {foodCategories.map((category) => {
            const count = menuItems.filter(
              (item) => item.category === category.slug
            ).length;

            return (
              <Link
                key={category.id}
                href={`/menu/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-base font-bold text-foreground group-hover:text-primary">
                    {category.title}
                  </h2>

                  <p className="mt-2 text-xs text-muted">
                    {count} محصول
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>مشاهده دسته</span>
                    <ArrowLeft size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
