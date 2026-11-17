
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import { notFound } from "next/navigation";

import { foodCategories } from "@/data/categories";
import { menuItems } from "@/data/menu";

interface MenuCategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MenuCategoryPage({
  params,
}: MenuCategoryPageProps) {
  const { slug } = await params;

  const category = foodCategories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const categoryItems = menuItems.filter(
    (item) => item.category === category.slug
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 md:py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowRight size={17} />
          بازگشت به صفحه اصلی
        </Link>

        <div className="relative mb-10 overflow-hidden rounded-3xl bg-surface-secondary">
          <div className="grid items-center md:grid-cols-[1fr_0.8fr]">
            <div className="relative z-10 p-7 md:p-10 lg:p-14">
              <span className="text-sm font-semibold text-primary">
                منوی همه چی کباب
              </span>

              <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                {category.title}
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-8 text-muted">
                {category.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground">
                <Utensils size={16} className="text-primary" />
                {categoryItems.length} محصول در این دسته
              </div>
            </div>

            <div className="relative aspect-[16/9] md:aspect-auto md:h-full md:min-h-[280px]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-secondary/30" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground">
            انتخاب از منوی {category.title}
          </h2>
          <p className="mt-2 text-sm text-muted">
            تمام محصولات این دسته را مشاهده کنید.
          </p>
        </div>

        {categoryItems.length === 0 ? (
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <p className="font-semibold text-foreground">
              محصولی در این دسته ثبت نشده است.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground">
                    {item.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted">
                      قیمت
                    </span>
                    <span className="text-base font-bold text-primary">
                      {item.price.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="mb-5 text-lg font-bold text-foreground">
            سایر دسته‌بندی‌های منو
          </h2>

          <div className="flex flex-wrap gap-3">
            {foodCategories
              .filter((item) => item.slug !== category.slug)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/menu/${item.slug}`}
                  className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
