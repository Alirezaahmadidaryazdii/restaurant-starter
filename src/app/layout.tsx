
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "همه چی کباب | طعم اصیل کباب ایرانی",
    template: "%s | همه چی کباب",
  },
  description:
    "مشاهده منوی کباب‌ها، جوجه، بال و کتف و غذاهای ایرانی رستوران همه چی کباب.",
  applicationName: "Restaurant Starter",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
