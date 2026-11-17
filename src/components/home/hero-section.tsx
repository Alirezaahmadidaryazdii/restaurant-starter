
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Flame, Utensils } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-20 lg:px-8 lg:gap-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <Flame size={15} />
            طعم اصیل غذای ایرانی
          </div>

          <h1 className="max-w-lg text-3xl leading-[1.65] font-bold tracking-tight text-foreground sm:text-4xl lg:text-[46px] lg:leading-[1.55]">
            یک تجربه خوشمزه
            <span className="block text-primary">
              با طعم واقعی کباب
            </span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-8 text-muted sm:text-base">
            از کباب‌های تازه و آبدار تا جوجه‌های زعفرانی و
            غذاهای اصیل ایرانی؛ انتخابی خوشمزه برای لحظات
            دورهمی شما.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#menu"
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:-translate-y-1 hover:bg-primary-hover"
            >
              مشاهده منوی غذاها
              <ArrowLeft size={17} />
            </Link>

            <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
              <Utensils size={18} className="text-accent" />
              <span>تنوعی از طعم‌های ایرانی</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-7 border-t border-border pt-6">
            <div>
              <p className="text-lg font-bold text-foreground">تازه</p>
              <p className="mt-1 text-xs text-muted">مواد اولیه</p>
            </div>

            <div className="h-9 w-px bg-border" />

            <div>
              <p className="text-lg font-bold text-foreground">اصیل</p>
              <p className="mt-1 text-xs text-muted">طعم ایرانی</p>
            </div>

            <div className="h-9 w-px bg-border" />

            <div>
              <p className="text-lg font-bold text-foreground">متنوع</p>
              <p className="mt-1 text-xs text-muted">منوی غذاها</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px]">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-2xl shadow-black/10">
            <Image
              src="/images/hero-kebab.jpg"
              alt="کباب ایرانی همراه با برنج زعفرانی"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 right-6 text-white">
              <p className="text-xs font-medium text-white/80">
                طعمی برای به یاد ماندن
              </p>
              <p className="mt-2 text-xl font-bold">
                همه چی کباب
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
