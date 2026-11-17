
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { foodCategories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section className="bg-surface-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            منوی رستوران
          </span>

          <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            دنیایی از طعم‌های خوشمزه
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted md:text-base">
            دسته‌بندی مورد علاقه‌تان را انتخاب کنید و از میان غذاهای متنوع
            همه چی کباب، غذای دلخواه خود را پیدا کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {foodCategories.map((category, index) => (
            <Link
              key={category.id}
              href={`/menu/${category.slug}`}
              className={`group relative block overflow-hidden rounded-3xl bg-foreground shadow-lg shadow-black/5 ${
                index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[5/3]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-colors duration-300 group-hover:from-black/90" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/80">
                    {category.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    <span>مشاهده غذاها</span>
                    <ArrowLeft
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
