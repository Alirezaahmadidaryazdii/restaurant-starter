
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { label: "صفحه اصلی", href: "/#home" },
  { label: "منوی غذاها", href: "/#menu" },
  { label: "تماس با ما", href: "/#about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/#home"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl font-black text-white">
            ه
          </div>

          <div>
            <p className="text-lg font-black text-foreground">
              همه چی کباب
            </p>
            <p className="text-[10px] font-medium tracking-wide text-muted">
              طعم اصیل کباب ایرانی
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-primary-hover sm:flex"
          >
            <Phone size={16} />
            تماس با رستوران
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-surface-secondary md:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border bg-background px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold !text-white"
            >
              <Phone size={16} />
              تماس با رستوران
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
