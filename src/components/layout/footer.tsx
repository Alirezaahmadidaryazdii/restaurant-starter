
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  ArrowUpLeft,
  Utensils,
} from "lucide-react";

const navigation = [
  { title: "صفحه اصلی", href: "/" },
  { title: "منوی غذاها", href: "/menu" },
  { title: "درباره ما", href: "/#about" },
  { title: "تماس با ما", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="  bg-[#292522] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div id="about" className="scroll-mt-24">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <Utensils size={23} />
              </div>

              <div>
                <span className="block text-xl font-bold">
                  همه چی کباب
                </span>
                <span className="mt-1 block text-xs text-white/50">
                  طعم اصیل غذای ایرانی
                </span>
              </div>
            </Link>

            <h2 className="mt-7 text-lg font-bold">
              درباره همه چی کباب
            </h2>

            <p className="mt-4 max-w-md text-sm leading-8 text-white/60">
              در همه چی کباب، تلاش می‌کنیم با استفاده از مواد اولیه تازه
              و تهیه غذاهای متنوع ایرانی، تجربه‌ای خوشمزه و به‌یادماندنی
              برای شما فراهم کنیم. از کباب‌های لذیذ تا چلوکباب‌های
              اصیل، انتخاب با شماست.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="اینستاگرام"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <MessageCircle size={19} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              دسترسی سریع
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <ArrowUpLeft size={15} className="text-accent" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact" className="scroll-mt-24">
            <h3 className="text-lg font-bold">
              ارتباط با ما
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <MapPin size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold">آدرس رستوران</p>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    آدرس رستوران را اینجا وارد کنید.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold">شماره تماس</p>
                  <a
                    href="tel:"
                    className="mt-2 block text-sm text-white/60 transition-colors hover:text-white"
                  >
                    شماره تماس رستوران
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Clock3 size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold">ساعت کاری</p>
                  <p className="mt-2 text-sm text-white/60">
                    همه روزه، ساعت کاری رستوران
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-right">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} همه چی کباب. تمامی حقوق محفوظ است.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors hover:text-white"
          >
            مشاهده منوی غذاها
            <ArrowUpLeft size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
