
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
        <HeroSection />
        </section>
        <section id="menu">
        <CategoriesSection />
        </section>
      </main>
      <section id="about">
      <Footer />
      </section>
    </>
  );
}
