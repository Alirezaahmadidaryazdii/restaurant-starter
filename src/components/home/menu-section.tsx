
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { foodCategories } from "@/data/categories";

export function MenuSection() {
  return (
    <section id="full-menu" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-primary">
            منوی رستوران
          </span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            منوی کامل همه چی کباب
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            انواع غذاها و نوشیدنی‌ها را مشاهده کنید.
          </p>
        </div>

        <div className="space-y-16">
          {foodCategories.map((category) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category.slug
            );

            return (
              <div
                key={category.id}
                id={category.slug}
                className="scroll-mt-24"
              >
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    {category.title}
                  </h3>
                  <span className="text-sm text-muted">
                    {categoryItems.length} غذا
                  </span>
                </div>

                {categoryItems.length === 0 ? (
                  <p className="rounded-2xl bg-surface-secondary p-6 text-center text-sm text-muted">
                    غذاهای این دسته به‌زودی اضافه می‌شوند.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryItems.map((item) => (
                      <article
                        key={item.id}
                        className="overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <h4 className="text-base font-bold text-foreground">
                            {item.name}
                          </h4>

                          <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                            {item.description}
                          </p>

                          <div className="mt-4 border-t border-border pt-4">
                            <span className="text-sm font-bold text-primary">
                              {item.price.toLocaleString("fa-IR")} تومان
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
