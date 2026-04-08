import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <Categories />
      <FeaturedProducts />
      <AboutSection />
      <Newsletter />
    </main>
  );
}
